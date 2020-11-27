import React from 'react';
import Friend from "./FriendCard/Friend";
import * as axios from "axios"
import user_photo from "../../assets/images/userpic.png"


class Friends extends React.Component {

    friendItem = {};

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    }

    render() {
        this.friendItem = this.props.friends.items.map(m => <Friend key={m.id}
                                                                    userid={m.id}
                                                                    name={m.name}
                                                                    birthday={"BIRTHDAY"}
                                                                    avaLink={user_photo}
                                                                    followed={m.followed}
                                                                    follow={this.props.follow}
                                                                    unfollow={this.props.unfollow}/>)
        return (
        <div>
            <div>
                {this.friendItem}
            </div>
        </div>
        )};
}

export default Friends;