import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updatenewpostActionCreator} from "../../../redux/profile-reducer";

const AddNew = (props) => {

    let onPostChange = (e) => {
        let text = e.target.value;
        let updatepostaction = updatenewpostActionCreator(text);
        props.dispatch(updatepostaction);
    }

    let addNewPost = () => {
        let addpostaction = addPostActionCreator();
        let updatepostaction = updatenewpostActionCreator('');
        props.dispatch(addpostaction);
        props.dispatch(updatepostaction);
    }

    return (
        <div className={s.postsArea}>
            <h2>My Posts</h2>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addNewPost}>Add Post</button>
            </div>
        </div>
    )
}

const Posts = (props) => {
    let postsElemets = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)
    return (
        <div>
            <AddNew
                addPost={props.addPost}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
            <div className={s.content}>
                {postsElemets}
            </div>
        </div>
    )
}

export default Posts;