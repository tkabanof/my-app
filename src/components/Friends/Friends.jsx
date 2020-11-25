import React from 'react';
import Friend from "./FriendCard/Friend";


const Friends = (props) => {

    let follow = (userid) => {
        props.follow(userid)
    }
    let unFollow = (userid) => {
        props.unfollow(userid)
    }

    let friendItem = props.friends.friendslist.map(m => <Friend key={m.userid}
                                                                userid={m.userid}
                                                                name={m.name}
                                                                birthday={m.birthday}
                                                                avaLink={m.avaLink}
                                                                followed={m.followed}
                                                                follow={follow}
                                                                unfollow={unFollow}/>)
    return (
        <div>
            {friendItem}
        </div>
    )
}

export default Friends;