import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     //this.props.setIsFEtching(true);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
    //         {
    //             withCredentials: true
    //         })
    //         .then(response => {
    //             if (response.data.resultCode === 0) {
    //                 let {id, login, email} = response.data.data;
    //                 this.props.setUserData(id, email, login);
    //             }
    //         });
    // }

    componentDidMount() {
        userAPI.authMe().then(response => {
            console.log(response.data);
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                this.props.setUserData(id, email, login);
            }
        })
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
    setUserData
})(HeaderContainer);