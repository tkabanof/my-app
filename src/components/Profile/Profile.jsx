import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profileInfodata={props.profileInfodata}
            />
            <Posts
                postsItems={props.postsItems}
                newPostText={props.newPostText}
                postsIsFEtching={props.postsIsFEtching}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost}
                setPosts={props.setPosts}
                setProfileInfo={props.setProfileInfo}
            />
        </div>
    )
};

export default Profile;