import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9B%D0%BE%D0%B1%D0%BE%D1%81_%D0%A3%D0%9F%D0%9D%D0%A4%D0%9C_%28%D0%BB%D0%BE%D0%B3%D0%BE%29.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.login}
                        <button onClick={props.logout}>LogOut</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;