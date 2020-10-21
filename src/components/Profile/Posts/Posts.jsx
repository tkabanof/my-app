import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'

const AddNew = () => {
    return (
        <div className={s.postsArea}>
            <h2>My Posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
    )
}

const Posts = () => {
    return (
        <div>
            <AddNew/>
            <div className={s.content}>
                <Post message='Lorem ipsum dolor sit amet' likes='10'/>
                <Post message='But I must explain to you how all this mistaken idea' likes='20'/>
                <Post message='On the other hand, we denounce with' likes='52'/>
            </div>
        </div>
    )
}


export default Posts;