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

let posts = [
    {message: 'Lorem ipsum dolor sit amet', likes: 15},
    {message: 'But I must explain to you how all this mistaken idea', likes: 45},
    {message: 'On the other hand, we denounce with', likes: 1},
]

let postsElemets = posts.map( p => <Post message={p.message} likes={p.likes}/>)

const Posts = () => {
    return (
        <div>
            <AddNew/>
            <div className={s.content}>
                {postsElemets}
            </div>
        </div>
    )
}


export default Posts;