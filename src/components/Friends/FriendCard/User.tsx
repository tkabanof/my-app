import s from './Friend.module.css'
import user_photo from "../../../assets/images/userpic.png"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {follow, selectfollowInProcess, unFollow} from "../../../redux/friendSlice";


type PropsType = {
    key: number
    userid: number
    name: string
    avaLink: string
    followed: boolean
}

const User = (props: PropsType) => {

    const dispatch = useDispatch()
    const followInProcess = useSelector(selectfollowInProcess)

    return (
        <div className={s.item}>
            <div className={s.userAva}>
                <img src={props.avaLink === null ? user_photo : props.avaLink}/>
            </div>

            <div className={s.followButton}>
                {props.followed
                    ? <button disabled={followInProcess.some(id => id === props.userid)} onClick={() => {
                        dispatch(unFollow(props.userid));
                    }}>Unfollow</button>
                    : <button disabled={followInProcess.some(id => id === props.userid)} onClick={() => {
                        dispatch(follow(props.userid));
                    }}>Follow</button>}
            </div>
            <div className={s.name}>
                <div>
                    <NavLink to={'/profile/' + props.userid}>
                        {props.name}
                    </NavLink>
                </div>
                <div>
                    ID:{props.userid}
                </div>
            </div>
        </div>
    )
}

export default User;