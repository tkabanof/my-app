import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'
import AddNew from './AddNewPost/AddNew';

const Posts = () => {
    return(
        <div className = {s.content}>
            <AddNew/>
            <Post message = 'Lorem ipsum dolor sit amet' likes = '10'/>
            <Post message = 'But I must explain to you how all this mistaken idea' likes = '20'/>
            <Post message = 'On the other hand, we denounce with' likes = '52'/>
        </div>
    )
}

export default Posts;