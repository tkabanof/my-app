import {userAPI} from "../api/api";
import {createAction} from "@reduxjs/toolkit";

const ADDPOST = 'ADD-POST';
const DELETEPOST = 'DELETE_POST';
const SET_POSTS = 'SET_POSTS'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const updatePhoto = createAction('UPDATEAVATAR');


let initialState = {
    postsItems: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', likes: 15},
        {id: 2, message: 'But I must explain to you how all this mistaken idea', likes: 45},
        {id: 3, message: 'On the other hand, we denounce with', likes: 1},
    ],
    postsIsFEtching: false,
    profileStatus: "Text Status Example",
    profileInfodata: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    profileInfoIsFEtching: false
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case updatePhoto.type: {
            let photos = {
                photos: {...action.payload.photos}
            }
            return {
                ...state,
                profileInfodata: {...state.profileInfodata, photos},
            }
        }
        case ADDPOST: {
            let newPost = {
                id: 999,
                message: action.newPostBody,
                likes: 1
            }
            return {
                ...state,
                postsItems: [...state.postsItems, newPost],
            };
        }
        case DELETEPOST: {
            return {
                ...state,
                postsItems: [...state.postsItems].filter(post => post.id !== action.postId),
            };
        }
        case SET_IS_FETCHING: {
            return {...state, profileInfoIsFEtching: action.profileInfoIsFEtching}
        }
        case SET_PROFILE_INFO: {
            return {...state, profileInfodata: action.response.data}
        }
        case SET_PROFILE_STATUS: {
            return {...state, profileStatus: action.response.data}
        }
        case SET_POSTS : {
            return {}
        }
        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({type: ADDPOST, newPostBody})
export const deletePost = (postId) => ({type: DELETEPOST, postId})
export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setProfileInfoAC = (response) => ({type: SET_PROFILE_INFO, response})
export const setProfileStatusAC = (response) => ({type: SET_PROFILE_STATUS, response})
export const setIsFEtching = (profileInfoIsFEtching) => ({type: SET_IS_FETCHING, profileInfoIsFEtching})

export const setProfileInfo = (userid) => async (dispatch) => {
    dispatch(setIsFEtching(true));
    let response = await userAPI.getUserProfileData(userid);
    dispatch(setProfileInfoAC(response));
}
export const setProfileStatus = (userid) => async (dispatch) => {
    let response = await userAPI.getUserStatus(userid);
    dispatch(setProfileStatusAC(response));
}
export const setMyStatus = (textStatus) => async (dispatch) => {
    let response = await userAPI.setMeStatus(textStatus);
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatusAC(textStatus));
    }
}
export const updateAvatar = (file) => async (dispatch) => {
    let response = await userAPI.setMyAvatar(file);
    if (response.data.resultCode === 0) {
        dispatch(updatePhoto(response.data.data));
    }
}
export const updateMyInfo = (myInfo) => async (dispatch, getState) => {

    let userid = getState().auth.userid;
    let req = {
        ...myInfo, userId: userid
    }
    debugger
    let response = await userAPI.setMyInfo(req);

    if (response.data.resultCode === 0) {
        dispatch(setIsFEtching(true));
        let response = await userAPI.getUserProfileData(userid);
        dispatch(setProfileInfoAC(response));
    }
}

export default profileReducer;