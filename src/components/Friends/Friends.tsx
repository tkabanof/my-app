import s from "./Friends.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./FriendCard/User";
import {userItemType} from "../../types/mainTypes";
import {FC} from "react";
import Search from "antd/lib/input/Search";
import {useDispatch} from "react-redux";
import {getUsers} from "../../redux/friend-reducer";
import {useHistory} from "react-router";


type Props = {
    items: Array<userItemType>
    onPageChanged: (value: number) => void
    followInProcess: Array<number>
    totalUserCount: number
    //setFollowInProcess: () => void
    follow: ()=> void
    unFollow: ()=> void
    pageSize: number


}

let Friends: FC<Props> = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()

    let friendItem = props.items.map(m => <User key={m.id}
                                                userid={m.id}
                                                name={m.name}
                                                birthday={"BIRTHDAY"}
                                                avaLink={m.photos.small}
                                                followed={m.followed}
                                                follow={props.follow}
                                                unFollow={props.unFollow}
                                                followInProcess={props.followInProcess}
                                                //setFollowInProcess={props.setFollowInProcess}
    />)


    const onSearch = (value: string) => {
        console.log(value)
        dispatch(getUsers(1, props.pageSize, value ))
        const searchParam = new URLSearchParams(history.location.search)
        searchParam.set('term', value)
        history.push({
            pathname: '/friends',
            search: searchParam.toString(),
        })
    }

    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            <Paginator totalCount={props.totalUserCount}
                       // pageSize={props.pageSize}
                       // currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            <div>
                {friendItem}
            </div>
        </div>
    );
}

export default Friends;