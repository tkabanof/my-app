import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profileInfodata={props.profileInfodata}
                profileStatus = {props.profileStatus}
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