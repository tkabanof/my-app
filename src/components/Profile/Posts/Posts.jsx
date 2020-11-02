import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'

const AddNew = (props) => {
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

const Posts = (props) => {

    let postsElemets = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

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