import {Field, reduxForm} from "redux-form";
import {email, maxLength15, minLength2, required} from "../../utils/validators";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router";

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

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginThunk})(Login);