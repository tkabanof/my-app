import {userAPI} from "../api/api";
import {createAction} from "@reduxjs/toolkit";
import {contactsType, photosType, postsItemType, profileInfodataType} from "../types/mainTypes";

const ADDPOST = 'ADD-POST';
const DELETEPOST = 'DELETE_POST';
const SET_POSTS = 'SET_POSTS'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const updatePhoto = createAction<photosType>('UPDATEAVATAR');

let initialState = {
    postsItems: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', likes: 15},
        {id: 2, message: 'But I must explain to you how all this mistaken idea', likes: 45},
        {id: 3, message: 'On the other hand, we denounce with', likes: 1},
    ] as Array<postsItemType>,
    postsIsFEtching: false as boolean,
    profileStatus: "Text Status Example" as string,
    profileInfodata: {
        "aboutMe": "я круто чувак 1001%" as string,
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        } as contactsType,
        "lookingForAJob": true as boolean,
        "lookingForAJobDescription": "не ищу, а дурачусь" as string,
        "fullName": "samurai dimych" as string,
        "userId": 2 as number,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        } as photosType,
    },
    profileInfoIsFEtching: false as boolean
}

export const profileReducer = (state = initialState, action: any) => {

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

export const addPost = (newPostBody: postsItemType) => ({type: ADDPOST, newPostBody})
export const deletePost = (postId: number) => ({type: DELETEPOST, postId})
export const setPosts = (posts: Array<postsItemType>) => ({type: SET_POSTS, posts})
export const setProfileInfoAC = (response: any) => ({type: SET_PROFILE_INFO, response})
export const setProfileStatusAC = (response: any) => ({type: SET_PROFILE_STATUS, response})
export const setIsFEtching = (profileInfoIsFEtching: boolean) => ({type: SET_IS_FETCHING, profileInfoIsFEtching})

export const setProfileInfo = (userid: number) => async (dispatch: any) => {
    dispatch(setIsFEtching(true));
    let response = await userAPI.getUserProfileData(userid);
    dispatch(setProfileInfoAC(response));
}
export const setProfileStatus = (userid: number) => async (dispatch: any) => {
    let response = await userAPI.getUserStatus(userid);
    dispatch(setProfileStatusAC(response));
}
export const setMyStatus = (textStatus: string) => async (dispatch: any) => {
    let response = await userAPI.setMeStatus(textStatus);
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatusAC(textStatus));
    }
}
export const updateAvatar = (file: any) => async (dispatch: any) => {
    let response = await userAPI.setMyAvatar(file);
    if (response.data.resultCode === 0) {
        dispatch(updatePhoto(response.data.data));
    }
}
export const updateMyInfo = (myInfo: profileInfodataType) => async (dispatch: any, getState: any) => {

    let userid: number = getState().auth.userid;
    let req: profileInfodataType = {
        ...myInfo, userId: userid
    }

    console.log(req)
    let response = await userAPI.setMyInfo(req);

    if (response.data.resultCode === 0) {
        dispatch(setIsFEtching(true));
        let response = await userAPI.getUserProfileData(userid);
        dispatch(setProfileInfoAC(response));
    }
}

export default profileReducer;