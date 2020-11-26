const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'


let initialStore =
    {
        items: []
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
            return {...state, items: [...action.friends]}
        }
        default: {
            return state;
        }
    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id: id
    }

}
export const unFollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export const setFriendsAC = (friends) => {
    return {
        type: SET_FRIENDS,
        friends: friends
    }
}

export default FriendReducer;