import {authAPI} from "../api/api";
import {createAction} from "@reduxjs/toolkit";

// const SET_USER_DATA = 'SET_USER_DATA'
export const setUserData = createAction<userLoginData>('SET_USER_DATA');


export type initialStoreType = {
    userid: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean
}
export type userLoginData = {
    userid: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean

}

let initialStore: initialStoreType = {
    userid: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialStore, action: any): initialStoreType  => {
    switch (action.type) {
        case setUserData.type: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const setUserInfo = () => async (dispatch: any) => {
    let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {

            let {id, login, email} = response.data.data;
            let loginData: userLoginData = {
                userid: id,
                email: email,
                login: login,
                isAuth: true
            }
            dispatch(setUserData(loginData));
        }
}
export const loginThunk = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(setUserInfo());
        }
}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logOut();
        if (response.data.resultCode === 0) {
            let loginData: userLoginData = {
                userid: null,
                email: null,
                login: null,
                isAuth: false
            }
                dispatch(setUserData(loginData));
            dispatch(setUserInfo());
        }
}
export default authReducer;