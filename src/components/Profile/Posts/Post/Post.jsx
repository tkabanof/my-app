import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg'/>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div>
                <div className={s.heart}></div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}

export default Post;