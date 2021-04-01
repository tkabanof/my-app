import {userItemType} from "../types/mainTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userAPI} from "../api/api";
import {AppThunk, RootState} from "./redux-store";
import * as buffer from "buffer";

interface initialStoreInterface {
    items: Array<userItemType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFEtching: boolean
    followInProcess: Array<number>
    term: string | null
    isFriend: boolean | null

}

type followpprocess = {
    isFEtching: boolean,
    userId: number
}

let initialState: initialStoreInterface =
    {
        items: [],
        pageSize: 20,
        totalUserCount: 10,
        currentPage: 1,
        isFEtching: false,
        followInProcess: [],
        term: null,
        isFriend: null
    }

    export const friendSlice = createSlice({
        name: 'friend',
        initialState,
        reducers: {
            followAction: (state, action: PayloadAction<number>) => {
                state.items.map(u => {
                    if (u.id === action.payload) u.followed = true
                })
            },
            unfollowAction: (state, action: PayloadAction<number>) => {
                state.items.map(u => {
                    if (u.id === action.payload) u.followed = false
                })
            },
            setFriends: (state, action: PayloadAction<Array<userItemType>>) => {
                state.items = action.payload
            },
            setCurrentPage: (state, action: PayloadAction<number>) => {
                state.currentPage = action.payload
            },
            setIsFEtching: (state, action: PayloadAction<boolean>) => {
                state.isFEtching = action.payload
            },
            setFollowInProcess: (state, action: PayloadAction<followpprocess>) => {
                action.payload.isFEtching ?
                    state.followInProcess.push(action.payload.userId) :
                    state.followInProcess = state.followInProcess.filter(id => id !== action.payload.userId)
            },
            setUsersTotalCount: (state, action: PayloadAction<number>) =>{
                state.totalUserCount = action.payload
            }

        }
    })

export const getUsers = (currentPage: number, pageSize: number, term?: string | null, friend?: string | boolean | null): AppThunk => async dispatch => {
    dispatch(setIsFEtching(true));
    let response = await userAPI.getFriends(currentPage, pageSize, term, friend)
    dispatch(setIsFEtching(false));
    dispatch(setFriends(response.data.items));
    dispatch(setUsersTotalCount(response.data.totalCount));
}
export const follow = (userid: number): AppThunk => async dispatch => {
    dispatch(setFollowInProcess({isFEtching: true, userId: userid}));
    let response = await userAPI.follow(userid);
    if (response.data.resultCode === 0) {
        dispatch(followAction(userid))
        dispatch(setFollowInProcess({isFEtching: true, userId: userid}));
    }
}
export const unFollow = (userid: number): AppThunk => async dispatch => {
    dispatch(setFollowInProcess({isFEtching: true, userId: userid}));
    let response = await userAPI.unfollow(userid);
    if (response.data.resultCode === 0) {
        dispatch(unfollowAction(userid))
        dispatch(setFollowInProcess({isFEtching: true, userId: userid}));
    }
}

export const {followAction, unfollowAction, setCurrentPage, setFollowInProcess, setFriends, setIsFEtching, setUsersTotalCount} = friendSlice.actions

export const selectFrienditems = (state: RootState) => state.friend.items
export const selectpageSize= (state: RootState) => state.friend.pageSize
export const selecttotalUserCount= (state: RootState) => state.friend.totalUserCount
export const selectcurrentPage= (state: RootState) => state.friend.currentPage
export const selectisFEtching= (state: RootState) => state.friend.isFEtching
export const selectfollowInProcess= (state: RootState) => state.friend.followInProcess

export default friendSlice.reducer
