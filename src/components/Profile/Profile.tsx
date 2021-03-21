import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {FC} from "react";
import {postsItemType, profileInfodataType} from "../../types/mainTypes";


type PropType = {
    profileInfodata: profileInfodataType
    profileStatus: string
    me: number
    setMyStatus: () => void
    updateAvatar: () => void
    updateMyInfo: () => void

    postsItems: Array<postsItemType>
    // newPostText: string
    postsIsFEtching: boolean
    addPost: () => void
    // updateNewPost: () => void
    setPosts: () => void
    // setProfileInfo: () => void
}
const Profile: FC<PropType> = (props) => {
    return (
        <div>
            <ProfileInfo
                profileInfodata={props.profileInfodata}
                profileStatus={props.profileStatus}
                me={props.me}
                setMyStatus={props.setMyStatus}
                updateAvatar={props.updateAvatar}
                updateMyInfo={props.updateMyInfo}
            />
            <Posts
                postsItems={props.postsItems}
                // newPostText={props.newPostText}
                postsIsFEtching={props.postsIsFEtching}
                addPost={props.addPost}
                // updateNewPost={props.updateNewPost}
                setPosts={props.setPosts}
                // setProfileInfo={props.setProfileInfo}
            />
        </div>
    )
};

export default Profile;