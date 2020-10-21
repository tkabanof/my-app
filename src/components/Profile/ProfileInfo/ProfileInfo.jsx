import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={s.profilePicture}>
            <img src='https://www.canon.ru/media/PCA%20Exercise%20-%20Landscape%20Photography%20exercise-landscape-photos-opener-05_1200%20x%20400_tcm203-1444470.jpg'/>
            <div className={s.description}>AVA</div>
        </div>
    )
}

export default ProfileInfo;