import {userAPI} from "../api/api";
import {userItemType} from "../types/mainTypes";

const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const FOLLOW_IN_PROCESS = 'FOLLOW_IN_PROCESS'

let initialStore =
    {
        items: [] as Array<userItemType>,
        pageSize: 20,
        totalUserCount: 10,
        currentPage: 1,
        isFEtching: false,
        followInProcess: [] as Array<number>
    }

type initialStoreType = typeof initialStore

const FriendReducer = (state = initialStore, action: any): initialStoreType => {

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
                    : state.followInProcess.filter(id => id !== action.userId)
            }
        }
        default: {
            return state;
        }
    }
}
//Экшены ==========================================================
export const followAC = (id: number) => ({type: FOLLOW, id})
export const unFollowAC = (id: number) => ({type: UNFOLLOW, id})
export const setFriends = (items: userItemType) => ({type: SET_FRIENDS, items})
export const setCurrentPage = (currentPageNum: number) => ({type: SET_CURRENT_PAGE, currentPageNum})
export const setIsFEtching = (isFEtching: boolean) => ({type: SET_IS_FETCHING, isFEtching})
export const setFollowInProcess = (isFEtching: boolean, userId: number) => ({
    type: FOLLOW_IN_PROCESS,
    isFEtching,
    userId
})
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUserCount: totalCount as number
    }
}
//Санки ===========================================================
export const getUsers = (currentPage: number, pageSize: number, term?: string | undefined, friend?: boolean | undefined) => async (dispatch: any) => {
    dispatch(setIsFEtching(true));
    let response = await userAPI.getFriends(currentPage, pageSize, term, friend)
    dispatch(setIsFEtching(false));
    dispatch(setFriends(response.data.items));
    dispatch(setUsersTotalCount(response.data.totalCount));

}
export const follow = (userid: number) => async (dispatch: any) => {
    dispatch(setFollowInProcess(true, userid));
    let response = await userAPI.follow(userid);
    if (response.data.resultCode === 0) {
        dispatch(followAC(userid));
        dispatch(setFollowInProcess(false, userid));
    }
}
export const unFollow = (userid: number) => async (dispatch: any) => {
    dispatch(setFollowInProcess(true, userid));
    let response = await userAPI.unfollow(userid);
    if (response.data.resultCode === 0) {
        dispatch(unFollowAC(userid));
        dispatch(setFollowInProcess(false, userid));
    }
}

export default FriendReducer;