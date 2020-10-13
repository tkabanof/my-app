import React from 'react';
import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src = 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg' />
      Post1
      <br></br>
      <a>like</a>
    </div>
  )
}

export default Post;