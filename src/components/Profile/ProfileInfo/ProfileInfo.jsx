import s from "./ProfileInfo.module.css"
import user_photo from "../../../assets/images/userpic.png";
import Status from "../Status/Status";
import MyInfo from "./MyInfo";
import MyInfoForm from "./MyInfoForm";
import {useState} from "react";
import {FormControlLabel, Switch} from "@material-ui/core";

const ProfileInfo = (props) => {
    let p = props.profileInfodata;
    let isMe = (props.me === p.userId);

    const avatarSelected = (e) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }

    let [editMode, setEditMode] = useState(false);

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

            <div>
                {props.me &&
                <FormControlLabel
                    control={<Switch size="small" checked={editMode} onChange={() => {
                        setEditMode(!editMode)
                    }}/>}
                    label="Режим редактирования"
                />}
            </div>

            {!editMode &&
            <MyInfo p={p} me={isMe}/>
            }

            {editMode &&
            <MyInfoForm updateMyInfo={props.updateMyInfo}/>
            }

        </div>
    )
}

export default ProfileInfo;