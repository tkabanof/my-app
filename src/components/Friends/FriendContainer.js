import {connect} from "react-redux";
import React from "react";
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
import {userAPI} from "../../api/api";


class FriendsComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFEtching(true);
        userAPI.getFriends(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFEtching(false);
                this.props.setFriends(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setIsFEtching(true);
        this.props.setCurrentPage(pageNum);
        userAPI.getFriends(pageNum, this.props.pageSize)
            .then(data => {
                this.props.setIsFEtching(false);
                this.props.setFriends(data.items)
                this.props.setUsersTotalCount(data.totalCount)
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