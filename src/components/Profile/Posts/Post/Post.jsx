import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src = 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg' />
      {props.message}
      <br></br>
      <span>like</span>
    </div>
  )
}

export default Post;