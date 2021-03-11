import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profileInfodata={props.profileInfodata}
                profileStatus={props.profileStatus}
                me={props.me}
                setMyStatus={props.setMyStatus}
                updateAvatar={props.updateAvatar}
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