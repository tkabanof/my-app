import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
    let postsElemets = props.postsItems.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPost(text);
    }

    let addNewPost = () => {
        props.addPost();
        props.updateNewPost("");
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