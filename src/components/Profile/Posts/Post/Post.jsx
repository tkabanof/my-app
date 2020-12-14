import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.userAva}>
                <img src='https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg'/>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.like}>
                {'likes' + ' ' + props.likes}
            </div>
        </div>
    )
}

export default Post;