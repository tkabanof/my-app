import s from './Posts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {
    let postsElemets = props.postsItems.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)

    let onSubmit = (inputData) => {
        props.addPost(inputData.newPostBody);
    }

    const NewPostInputForm = (props) => {
        return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"newPostBody"} placeholder={"Type new post"}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>)
    };

    const ReduxNewPostInputForm = reduxForm({
        form: "newPostInput"
    })(NewPostInputForm)

    return (
        <div>
            <div className={s.postsArea}>
                <ReduxNewPostInputForm onSubmit={onSubmit}/>
            </div>
            <h2>My Posts</h2>
            <div className={s.content}>
                {postsElemets}
            </div>
        </div>
    )
}

export default Posts;