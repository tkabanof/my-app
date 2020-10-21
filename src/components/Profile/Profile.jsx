import React from 'react';
import s from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

export default Profile;