import Friend from "./FriendCard/Friend";
import s from "./Friends.module.css"
import Paginator from "../common/Paginator/Paginator";

let Friends = (props) => {

    let friendItem = props.items.map(m => <Friend key={m.id}
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
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            <div>
                {friendItem}
            </div>
        </div>
    );
}

export default Friends;