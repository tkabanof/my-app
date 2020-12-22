import { Component } from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setUserInfo} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setUserInfo();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {
    setUserInfo, logout
})(HeaderContainer);