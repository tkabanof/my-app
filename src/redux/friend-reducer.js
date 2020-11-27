const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialStore =
    {
        items: [],
        pageSize: 20,
        totalUserCount: 10,
        currentPage: 1
    }

const FriendReducer = (state = initialStore, action) => {

    console.log(state)
    console.log(action)
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
        default: {
            return state;
        }
    }
}

export const followAC = (id) => ({type: FOLLOW, id})
export const unFollowAC = (id) => ({type: UNFOLLOW, id})
export const setFriendsAC = (items) => ({type: SET_FRIENDS, items})
export const setCurrentPageAC = (currentPageNum) => ({type: SET_CURRENT_PAGE, currentPageNum})
export const setUsersTotalCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUserCount: totalCount
    }
}

export default FriendReducer;