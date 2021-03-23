import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut, selectAuthLogin, selectAuthUserId, selectIsAuth, setUserInfoN} from "../../redux/authSlice";
import {useEffect} from "react";
import logo from './../../logo.svg';

const Header = () => {

    const userid = useSelector(selectAuthUserId);
    const login = useSelector(selectAuthLogin);
    const isAuth = useSelector(selectIsAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserInfoN())
    }, [userid, login, isAuth])

    return (
        <header className={s.header}>
            <img
                src={logo}/>
            <div className={s.loginBlock}>
                {isAuth ?
                    <div>{login}
                        <button onClick={() => {
                            dispatch(logOut())
                        }
                        }>LogOut
                        </button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;