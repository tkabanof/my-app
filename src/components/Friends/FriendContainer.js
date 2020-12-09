import {connect} from "react-redux";
import React from "react";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {
    follow, getUsers,
    setCurrentPage, setFollowInProcess,
    unFollow
} from "../../redux/friend-reducer";

class FriendsComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsers(pageNum, this.props.pageSize);
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
                followInProcess={this.props.followInProcess}
                setFollowInProcess={this.props.setFollowInProcess}
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
        isFEtching: state.friends.isFEtching,
        followInProcess: state.friends.followInProcess
    }
}

const FriendContainer = connect(mapStateToProps, {
    follow, unFollow,
    setCurrentPage,
    setFollowInProcess, getUsers
})(FriendsComponent)

export default FriendContainer;