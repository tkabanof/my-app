import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'


const AddNew = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})

    }

    let addNewPost = () => {
        props.dispatch({type: 'ADD-POST'})
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
    }

    return (
        <div className={s.postsArea}>
            <h2>My Posts</h2>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
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
            />
            <div className={s.content}>
                {postsElemets}
            </div>
        </div>
    )
}

export default Posts;