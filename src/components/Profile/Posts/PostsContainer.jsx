import React from 'react';
import {addPostActionCreator, updatenewpostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}
let mapDispatchToState = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updatenewpostActionCreator(text));
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
            dispatch(updatenewpostActionCreator(''))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToState)(Posts);
export default PostsContainer;