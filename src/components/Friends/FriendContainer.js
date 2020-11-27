import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followAC,
    setCurrentPageAC,
    setFriendsAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../redux/friend-reducer";

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
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendContainer;