import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    setCurrentPage,
    setFriends,
    setIsFEtching,
    setUsersTotalCount,
    unFollow
} from "../../redux/friend-reducer";

class FriendsComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFEtching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setIsFEtching(false);
                this.props.setFriends(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setIsFEtching(true);
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFEtching(false);
                this.props.setFriends(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    render() {
        return <>
            <div>
                {this.props.isFEtching ? <Preloader/> : null}</div>
            <Friends
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                items={this.props.items}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    };
}


let mapStateToProps = (state) => {
    return {
        items: state.friends.items,
        pageSize: state.friends.pageSize,
        totalUserCount: state.friends.totalUserCount,
        currentPage: state.friends.currentPage,
        isFEtching: state.friends.isFEtching
    }
}

const FriendContainer = connect(mapStateToProps, {
    follow, unFollow, setFriends, setCurrentPage, setIsFEtching, setUsersTotalCount
})(FriendsComponent)

export default FriendContainer;