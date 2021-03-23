import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import {selectIsAuth} from "../../redux/authSlice";
import LoginForm from "./LoginForm";

const Login = () => {

    const isAuth = useSelector(selectIsAuth);

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
};

export default Login;