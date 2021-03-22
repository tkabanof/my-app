import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "./redux-store";
import {authAPI} from "../api/api";
import {userLoginData} from "../types/mainTypes";

interface AuthState {
    userid: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}


const initialState: AuthState = {
    userid: null,
    email: null,
    login: null,
    isAuth: false
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDataN: (state, action: PayloadAction<userLoginData>) => {
            state.userid = action.payload.userid
            state.email = action.payload.email
            state.login = action.payload.login
            state.isAuth = action.payload.isAuth
        }
    }
})

export const setUserInfoN = (): AppThunk => async dispatch => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        let loginData: userLoginData = {
            userid: id,
            email: email,
            login: login,
            isAuth: true
        }
        dispatch(setUserDataN(loginData));
    }
};
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(setUserInfoN());
    }
};
export const logOut = (): AppThunk => async dispatch => {
    let response = await authAPI.logOut();
    if (response.data.resultCode === 0) {
        let loginData: userLoginData = {
            userid: null,
            email: null,
            login: null,
            isAuth: false
        }
        dispatch(setUserDataN(loginData));
        dispatch(setUserInfoN());
    }
};


export const {setUserDataN} = authSlice.actions

export const selectAuthUserId = (state: RootState) => state.auth.userid
export const selectAuthEmail = (state: RootState) => state.auth.email
export const selectAuthLogin = (state: RootState) => state.auth.login
export const selectIsAuth = (state: RootState) => state.auth.isAuth

export default authSlice.reducer