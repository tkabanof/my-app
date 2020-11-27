import React from 'react';
import Friend from "./FriendCard/Friend";
import * as axios from "axios"
import s from "./Friends.module.css"


class Friends extends React.Component {

    friendItem = {};

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);

        }

        this.friendItem = this.props.items.map(m => <Friend key={m.id}
                                                            userid={m.id}
                                                            name={m.name}
                                                            birthday={"BIRTHDAY"}
                                                            avaLink={m.photos.small}
                                                            followed={m.followed}
                                                            follow={this.props.follow}
                                                            unfollow={this.props.unfollow}/>)
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}>{p} </span>
                    })}
                </div>
                <div>
                    {this.friendItem}
                </div>
            </div>
        )
    };
}

export default Friends;