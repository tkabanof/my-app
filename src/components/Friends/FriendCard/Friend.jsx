import React from 'react';
import s from './Friend.module.css'
import user_photo from "../../../assets/images/userpic.png"
import {NavLink} from "react-router-dom";
import {follow, unFollow} from "../../../redux/friend-reducer";

const Friend = (props) => {

    return (

        <div className={s.item}>
            <div className={s.userAva}>
                <img src={props.avaLink === null ? user_photo : props.avaLink}/>
            </div>

            <div className={s.followButton}>
                {props.followed
                    ? <button disabled={props.followInProcess.some(id => id === props.id)} onClick={() => {
                        props.unFollow(props.userid);
                    }}>Unfollow</button>
                    : <button disabled={props.followInProcess.some(id => id === props.userid)} onClick={() => {
                        props.follow(props.userid);
                    }}>Follow</button>}
            </div>
            <div className={s.name}>
                <div>
                    <NavLink to={'/profile/' + props.userid}>
                        {props.name}
                    </NavLink>
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