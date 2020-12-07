import React from 'react';
import Friend from "./FriendCard/Friend";
import s from "./Friends.module.css"
import {setFollowInProcess} from "../../redux/friend-reducer";

let Friends = (props) => {


    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);

    }

    let friendItem = props.items.map(m => <Friend key={m.id}
                                                  userid={m.id}
                                                  name={m.name}
                                                  birthday={"BIRTHDAY"}
                                                  avaLink={m.photos.small}
                                                  followed={m.followed}
                                                  follow={props.follow}
                                                  unfollow={props.unfollow}
                                                  followInProcess={props.followInProcess}
                                                  setFollowInProcess={props.setFollowInProcess}
    />)
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : null}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p} </span>
                })}
            </div>
            <div>
                {friendItem}
            </div>
        </div>
    );
}

export default Friends;