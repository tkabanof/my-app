import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'


const AddNew = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    let addNewPost = () => {
        props.addPost();
        props.updateNewPostText('');
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
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
            />
            <div className={s.content}>
                {postsElemets}
            </div>
        </div>
    )
}

export default Posts;