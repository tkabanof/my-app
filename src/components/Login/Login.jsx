import {Field, reduxForm} from "redux-form";
import {userAPI} from "../../api/api";
import {maxLength15, minLength2, required} from "../../utils/validators";

const renderField = ({
                                input,
                                label,
                                type,
                                meta: { touched, error, warning }
                            }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                       name={"login"}
                       label = {"Имя пользователя"}
                       component={renderField}
                       validate={[required, maxLength15, minLength2]}
                />
            </div>
            <div>
                <Field
                       name={"password"}
                       component={renderField}
                       label = {"Пароль"}
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
        console.log(formData)
        /*userAPI.login(formData.login, formData.password, formData.rememberMe).then((data)=>{
            data.resultCode === 0 ? alert("Login succes") : alert("login failed")
        })*/
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;