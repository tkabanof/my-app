import {connect} from "react-redux";
import Friends from "./Friends";
import {followAC, setFriendsAC, unFollowAC} from "../../redux/friend-reducer";

let mapStateToProps = (state) => {
    return {
        friends: state.friends
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
        }
    }
}
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendContainer;