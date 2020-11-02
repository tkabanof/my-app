import React from 'react';
import s from "./Friends.module.css";
import Friend from "./FriendCard/Friend";


const Friends = (props) => {

    let friendItem = props.friends.friendslist.map(m => <Friend name={m.name} birthday = {m.birthday} />)
    return (
        <div>
            {friendItem}
        </div>
    )
}

export default Friends;