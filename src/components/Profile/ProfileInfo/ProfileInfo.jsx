import s from "./ProfileInfo.module.css"
import user_photo from "../../../assets/images/userpic.png";
import Status from "../Status/Status";
import MyInfo from "./MyInfo";

const ProfileInfo = (props) => {
    let p = props.profileInfodata;
    let isMe = (props.me === p.userId);

    const avatarSelected = (e) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }

    return (
        <div>
            <p>{p.fullName}</p>
            <Status status={props.profileStatus}
                    me={isMe}
                    setMyStatus={props.setMyStatus}
            />
            <div className={s.profilePicture}>
                <img src={p.photos.small || user_photo}/>
                <br/>
                {isMe &&
                <input type="file" accept="image/jpeg,image/png,image/gif"
                       onChange={avatarSelected}/>}
            </div>

            <MyInfo p={p} me={isMe}/>

        </div>
    )
}

export default ProfileInfo;