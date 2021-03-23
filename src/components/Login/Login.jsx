import {Field, reduxForm} from "redux-form";
import {email, maxLength15, minLength2, required} from "../../utils/validators";
import s from "./Login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {login, selectIsAuth} from "../../redux/authSlice";

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input}
                   type={type} className={touched && (error || warning) ? s.error : null}/>
            {touched &&
            ((error && <div>{error}</div>) ||
                (warning && <div>{warning}</div>))}
        </div>
    </div>
);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    label={"Имя пользователя (email)"}
                    component={renderField}
                    validate={[required, email, minLength2]}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    component={renderField}
                    type={"password"}
                    label={"Пароль"}
                    validate={[required, maxLength15, minLength2]}
                />
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>remeber me
            </div>
            {error && <div>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);


    const onSubmit = (formData) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe));
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};


export default Login;