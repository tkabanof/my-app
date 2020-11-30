import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setFriendsAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../redux/friend-reducer";
import React from "react";
import * as axios from "axios";
import Friends from "./Friends";

class FriendsComponent extends React.Component {

    friendItem = {};

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
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

        return <Friends
            totalUserCount = { this.props.totalUserCount}
            pageSize= { this.props.pageSize}
            items = { this.props.items}
            currentPage = { this.props.currentPage}
            follow={ this.props.follow}
            unfollow={ this.props.unfollow}
            onPageChanged = {this.onPageChanged}
        />
    };
}


let mapStateToProps = (state) => {
    return {
        items: state.friends.items,
        pageSize: state.friends.pageSize,
        totalUserCount: state.friends.totalUserCount,
        currentPage: state.friends.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends));
        },
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageAC(pageNum));
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }

    }
}
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsComponent)

export default FriendContainer;