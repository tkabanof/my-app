import React from 'react';
import s from './Friend.module.css'
import user_photo from "../../../assets/images/userpic.png"

const Friend = (props) => {
    return (
        <div className={s.item}>
            <div className={s.userAva}>
                <img src={props.avaLink === null ? user_photo : props.avaLink}/>
            </div>
            <div className={s.followButton}>
                {props.followed
                    ? <button onClick={() => {
                        props.unfollow(props.userid)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(props.userid)
                    }}>Follow</button>}
            </div>
            <div className={s.name}>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.birthday}
                </div>
                <div>
                    ID:{props.userid}
                </div>
            </div>
        </div>
    )
}


export default Friend;