import React from 'react';
import s from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.profiles.posts}
                   newPostText={props.profiles.newPostText}
                   addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;