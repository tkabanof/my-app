import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialStore = {
    userid: null,
    email: null,
    login: null,
    isFetching: null,
    isAuth: false
}

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state;
        }
    }
}
export const setUserData = (userid, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userid, email, login, isAuth}
})

export const setUserInfo = () => async (dispatch) => {
    let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, login, email, true));
        }
}
export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(setUserInfo());
        }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logOut();
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
            dispatch(setUserInfo());
        }
}
export default authReducer;