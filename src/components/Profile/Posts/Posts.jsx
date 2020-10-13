import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'
import AddNew from './AddNewPost/AddNew';

const Posts = () => {
    return(
        <div className = {s.content}>
            <AddNew/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts;