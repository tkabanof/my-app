import React from 'react';
import s from './Friend.module.css'
import user_photo from "../../../assets/images/userpic.png"
import {NavLink} from "react-router-dom";
//import * as axios from "axios";

const axios = require('axios').default;

const Friend = (props) => {
    return (
        <div className={s.item}>

            <div className={s.userAva}>
                <img src={props.avaLink === null ? user_photo : props.avaLink}/>
            </div>

            <div className={s.followButton}>
                {props.followed
                    ? <button onClick={() => {

                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userid}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "93235bec-8cb3-4044-8eaa-f0dec3f7ab00"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(props.userid)
                                }
                            });

                    }}>Unfollow</button>
                    : <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userid}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "93235bec-8cb3-4044-8eaa-f0dec3f7ab00"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(props.userid)
                                }
                            });

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