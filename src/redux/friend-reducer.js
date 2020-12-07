const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialStore =
    {
        items: [],
        pageSize: 20,
        totalUserCount: 10,
        currentPage: 1,
        isFEtching: false
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

        default: {
            return state;
        }
    }
}

export const follow = (id) => ({type: FOLLOW, id})
export const unFollow = (id) => ({type: UNFOLLOW, id})
export const setFriends = (items) => ({type: SET_FRIENDS, items})
export const setCurrentPage = (currentPageNum) => ({type: SET_CURRENT_PAGE, currentPageNum})
export const setIsFEtching = (isFEtching) => ({type: SET_IS_FETCHING, isFEtching})
export const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUserCount: totalCount
    }
}

export default FriendReducer;