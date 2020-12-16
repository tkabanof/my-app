import {userAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialStore = {
    userid: 2,
    email: null,
    login: null,
    isFetching: null,
    isAuth: true
}

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}
export const setUserData = (userid, email, login) => ({type: SET_USER_DATA, data: {userid, email, login}})

export const setUserInfo = () => {
    return (dispatch) => {
        userAPI.authMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setUserData(id, email, login));
            }
        })
    }
}

export default authReducer;