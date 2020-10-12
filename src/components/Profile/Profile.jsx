import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
        <div>
          <img src='https://vse-footbolki.ru/image/catalog/vsm/0/1/1334/1334537/previews/people_1_holst_square_full_front_white_700.jpg' />
        </div>
        <div>ava + description</div>
        <div className={s.posts}>My Posts
          <div>New post</div>
          <div>Post1</div>
          <div>post2</div>
        </div>

      </div>
    )
}

export default Profile;