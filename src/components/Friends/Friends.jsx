import React from 'react';
import Friend from "./FriendCard/Friend";
import {NodePath as axios} from "@babel/traverse";


const Friends = (props) => {

if (props.friends.length === 0) {
    props.setFriends(
        [
            {
                userid: 1,
                avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
                name: 'Dima',
                birthday: '2000-01-01',
                followed: true
            }
            ,
            {
                userid: 2,
                avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
                name: 'Tanya',
                birthday: '2010-12-31',
                followed: false
            }
            ,
            {
                userid: 3,
                avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
                name: 'Tim',
                birthday: '2011-12-31',
                followed: true
            }
            ,
            {
                userid: 4,
                avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
                name: 'Dan',
                birthday: '2001-02-31',
                followed: true
            }
        ]
    );
}

    let friendItem = props.friends.friendslist.map(m => <Friend key={m.userid}
                                                                userid={m.userid}
                                                                name={m.name}
                                                                birthday={m.birthday}
                                                                avaLink={m.avaLink}
                                                                followed={m.followed}
                                                                follow={props.follow}
                                                                unfollow={props.unfollow}/>)
    return (
        <div>
            {friendItem}
        </div>
    )
}

export default Friends;