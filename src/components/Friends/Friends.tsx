import s from "./Friends.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./FriendCard/User";
import {userItemType} from "../../types/mainTypes";
import {FC} from "react";


type Props = {
    items: Array<userItemType>
    onPageChanged: (value: number) => void
    followInProcess: Array<number>
    totalUserCount: number
    setFollowInProcess: () => void
    follow: ()=> void
    unFollow: ()=> void


}

let Friends: FC<Props> = (props) => {

    let friendItem = props.items.map(m => <User key={m.id}
                                                userid={m.id}
                                                name={m.name}
                                                birthday={"BIRTHDAY"}
                                                avaLink={m.photos.small}
                                                followed={m.followed}
                                                follow={props.follow}
                                                unFollow={props.unFollow}
                                                followInProcess={props.followInProcess}
                                                setFollowInProcess={props.setFollowInProcess}
    />)
    return (
        <div>
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