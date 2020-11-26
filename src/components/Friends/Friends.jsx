import React from 'react';
import Friend from "./FriendCard/Friend";
import * as axios from "axios"
import user_photo from "../../assets/images/userpic.png"


const Friends = (props) => {

    let getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setFriends(response.data.items)
            });
    }
    let friendItem = props.friends.items.map(m => <Friend key={m.userid}
                                                          userid={m.id}
                                                          name={m.name}
                                                          birthday={"BIRTHDAY"}
                                                          avaLink={user_photo}
                                                          followed={m.followed}
                                                          follow={props.follow}
                                                          unfollow={props.unfollow}/>)
    return (
        <div>
            <div>
                <button onClick={getUsers}>Get Users</button>
            </div>
            <div>
                {friendItem}
            </div>
        </div>
    )
}

export default Friends;