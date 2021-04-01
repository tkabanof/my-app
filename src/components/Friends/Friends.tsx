import s from "./Friends.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./FriendCard/User";
import Search from "antd/lib/input/Search";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {
    getUsers,
    selectcurrentPage,
    selectFrienditems,
    selectpageSize,
    selecttotalUserCount,
    setCurrentPage,
} from "../../redux/friendSlice";
import {useEffect, useState} from "react";


let Friends = () => {

    const items = useSelector(selectFrienditems)
    const pageSize = useSelector(selectpageSize)
    const totalUserCount = useSelector(selecttotalUserCount)
    const currentPage = useSelector(selectcurrentPage)

    const dispatch = useDispatch()
    const history = useHistory()

    const [term, setTerm] = useState<string>('')
    const [isFriend, setIsFriend] = useState<string | null>(null)


    useEffect(()=> {
        const searchParam = new URLSearchParams(history.location.search)
        if (!!searchParam.toString()) {
            if (searchParam.has('term')) setTerm(String(searchParam.get('term')))
            if (searchParam.has('friend')) setIsFriend(String(searchParam.get('friend')))
            if (searchParam.has('page')) dispatch(setCurrentPage(Number(searchParam.get('page'))));

        }

    },[])
    useEffect(() => {

        dispatch(getUsers(currentPage, pageSize, term, isFriend))

        const searchParamOut = new URLSearchParams()
        searchParamOut.set('page', String(currentPage))
        searchParamOut.set('friend', String(isFriend))
        if (!!term) searchParamOut.set('term', String(term))

        history.push({
            pathname: history.location.pathname,
            search: searchParamOut.toString(),
        },)

    }, [currentPage, pageSize, term, isFriend])

    let friendItem = items.map(m => <User key={m.id}
                                          userid={m.id}
                                          name={m.name}
                                          avaLink={m.photos.small}
                                          followed={m.followed}
    />)


    const onSearch = (value: string) => {
        // dispatch(getUsers(1, pageSize, value))
        setTerm(value)
        // const searchParam = new URLSearchParams(history.location.search)
        // searchParam.set('term', value)
        // history.push({
        //     pathname: '/friends',
        //     search: searchParam.toString(),
        // })
    }
    const onPageChanged = (pageNum: number) => {
        dispatch(setCurrentPage(pageNum));

    }

    return (
        <div>
            <Search placeholder={'filter'} onSearch={onSearch} enterButton/>
            <Paginator
                totalCount={totalUserCount}
                onPageChanged={onPageChanged}
                pageNum={currentPage}
            />
            <div>
                {friendItem}
            </div>
        </div>
    );
}

export default Friends;