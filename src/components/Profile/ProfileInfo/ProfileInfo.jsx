import s from "./ProfileInfo.module.css"
import user_photo from "../../../assets/images/userpic.png";
import Status from "../Status/Status";

const ProfileInfo = (props) => {
    let p = props.profileInfodata;
    return (
        <div>
            <p>{p.fullName}</p>
            <Status status={props.profileStatus}
                    me={(props.me === p.userId)}
                    setMyStatus={props.setMyStatus}
            />
            <div className={s.profilePicture}>
                <img
                    src={p.photos.small || user_photo}/>
                <div className={s.description}>
                    <p>{p.aboutMe}</p>
                    <a href={p.contacts.facebook}>{p.contacts.facebook}</a>
                    <p></p>
                    <a href={p.contacts.vk}>{p.contacts.vk}</a>
                    <p></p>
                    <a href={p.contacts.twitter}>{p.contacts.twitter}</a>
                    <p></p>
                    <a href={p.contacts.instagram}>{p.contacts.instagram}</a>
                    <p></p>
                    <a href={p.contacts.youtube}>{p.contacts.youtube}</a>
                    <p></p>
                    <a href={p.contacts.github}>{p.contacts.github}</a>
                    <p></p>
                    <a href={p.contacts.mainLink}>{p.contacts.mainLink}</a>
                    <p>{p.lookingForAJob ? "Ищу работу" : "Есть работа"}</p>
                    <p>{p.lookingForAJob ? p.lookingForAJobDescription : ""}</p>

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ProfileInfo;