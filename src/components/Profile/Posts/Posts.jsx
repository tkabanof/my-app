import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'


const Posts = (props) => {
    let postsElemets = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)
    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    let addNewPost = () => {
        props.addNewPost();
    }

    return (
        <div>
            <div className={s.postsArea}>
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
            <h2>My Posts</h2>
            <div className={s.content}>
                {postsElemets}
            </div>
        </div>
    )
}

export default Posts;