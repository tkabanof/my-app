import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const FOLLOW_IN_PROCESS = 'FOLLOW_IN_PROCESS'

let initialStore =
    {
        items: [],
        pageSize: 20,
        totalUserCount: 10,
        currentPage: 1,
        isFEtching: false,
        followInProcess: []
    }

const FriendReducer = (state = initialStore, action) => {

    // console.log(state)
    // console.log(action)
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_FRIENDS: {
            return {...state, items: action.items}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPageNum}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUserCount: action.totalUserCount}
        }
        case SET_IS_FETCHING: {
            return {...state, isFEtching: action.isFEtching}
        }
        case FOLLOW_IN_PROCESS: {
            return {
                ...state, followInProcess: action.isFEtching
                    ? [...state.followInProcess, action.userId]
                    : state.followInProcess.filter(id => id != action.userId)

            }
        }

        default: {
            return state;
        }
    }
}
//Экшены ==========================================================
export const followAC = (id) => ({type: FOLLOW, id})
export const unFollowAC = (id) => ({type: UNFOLLOW, id})
export const setFriends = (items) => ({type: SET_FRIENDS, items})
export const setCurrentPage = (currentPageNum) => ({type: SET_CURRENT_PAGE, currentPageNum})
export const setIsFEtching = (isFEtching) => ({type: SET_IS_FETCHING, isFEtching})
export const setFollowInProcess = (isFEtching, userId) => ({type: FOLLOW_IN_PROCESS, isFEtching, userId})
export const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUserCount: totalCount
    }
}
//Санки ===========================================================
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
        dispatch(setIsFEtching(true));
        let response = await userAPI.getFriends(currentPage, pageSize)
                dispatch(setIsFEtching(false));
                dispatch(setFriends(response.data.items));
                dispatch(setUsersTotalCount(response.data.totalCount));

}
export const follow = (userid) => async (dispatch) => {
        dispatch(setFollowInProcess(true, userid));
        let response = await userAPI.follow(userid);
                if (response.data.resultCode === 0) {
                    dispatch(followAC(userid));
                    dispatch(setFollowInProcess(false, userid));
                }
}
export const unFollow = (userid) => async (dispatch) => {
        dispatch(setFollowInProcess(true, userid));
        let response = await userAPI.unfollow(userid);
                if (response.data.resultCode === 0) {
                    dispatch(unFollowAC(userid));
                    dispatch(setFollowInProcess(false, userid));
                }
}

export default FriendReducer;