import React from 'react';
import s from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = () => {
    return(
      <div>
        <div>
        <img src='https://vse-footbolki.ru/image/catalog/vsm/0/1/1334/1334537/previews/people_1_holst_square_full_front_white_700.jpg' />
      </div>
      <Posts/>
      </div>
    )
}

export default Profile;