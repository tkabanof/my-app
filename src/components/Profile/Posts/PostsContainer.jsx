import React from 'react';
import {addPostActionCreator, updatenewpostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState();
    let onPostChange = (text) => {
        props.store.dispatch(updatenewpostActionCreator(text))
    }

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updatenewpostActionCreator(''));
    }

    return <Posts onPostChange={onPostChange}
                  addNewPost={addNewPost}
                  posts={state.profile.posts}
                  newPostText={state.profile.newPostText}
    />
}

export default PostsContainer;