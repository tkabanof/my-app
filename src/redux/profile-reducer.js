import {userAPI} from "../api/api";

const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
const ADDPOST = 'ADD-POST';
const SET_POSTS = 'SET_POSTS'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
    postsItems: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', likes: 15},
        {id: 2, message: 'But I must explain to you how all this mistaken idea', likes: 45},
        {id: 3, message: 'On the other hand, we denounce with', likes: 1},
    ],
    postsIsFEtching: false,
    newPostText: 'New Post',
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
        case ADDPOST: {
            let newPost = {
                id: 999,
                message: state.newPostText,
                likes: 1
            }
            return {
                ...state,
                postsItems: [...state.postsItems, newPost],
            };
        }
        case UPDATENEWPOSTTEXT: {
            return {
                ...state
                , newPostText: action.newText
            };
        }
        case SET_IS_FETCHING: {
            return {...state, profileInfoIsFEtching: action.profileInfoIsFEtching}
        }
        case SET_PROFILE_INFO: {
            return {...state, profileInfodata: action.data}
        }

        case SET_POSTS : {
            return {}
        }

        default:
            return state;
    }
}

export const addPost = () => ({type: ADDPOST})
export const updateNewPost = (newText) => ({type: UPDATENEWPOSTTEXT, newText})
export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setProfileInfoAC = (data) => ({type: SET_PROFILE_INFO, data})
export const setIsFEtching = (profileInfoIsFEtching) => ({type: SET_IS_FETCHING, profileInfoIsFEtching})

export const setProfileInfo = (uesrid) => {
    return (dispatch) => {
        dispatch(setIsFEtching(true));
        userAPI.getUserProfileData(uesrid).then(response => {
            dispatch(setIsFEtching(false));
            dispatch(setProfileInfoAC(response));
        });
    }
}

export default profileReducer;