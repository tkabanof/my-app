const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'

let initialStore = {
    friendslist: [
        {
            userid: 1,
            avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
            name: 'Dima',
            birthday: '2000-01-01',
            followed: true
        }
        ,
        {
            userid: 2,
            avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
            name: 'Tim', birthday: '1900-05-15',
            followed: false
        },
        {
            userid: 3,
            avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
            name: 'Tanya',
            birthday: '2010-12-31',
            followed: true
        }
    ]
}

const FriendReducer = (state = initialStore, action) => {
    console.log(state)
    console.log(action.type)
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                friendslist: state.friendslist.map(u => {
                    if (u.userid === action.userid) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                })
            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                friendslist: state.friendslist.map(u => {
                    if (u.userid === action.userid) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                })
            }
        }
        case SET_FRIENDS: {
            return {...state, friendslist: state.friendslist, ...action.friendslist}
        }
        default: {
            return state;
        }
    }
}

export const followAC = (userid) => {
    return {
        type: FOLLOW,
        userid: userid
    }

}
export const unFollowAC = (userid) => {
    return {
        type: UNFOLLOW,
        userid: userid
    }
}

export const setFriendsAC = (users) => {
    return {
        type: SET_FRIENDS,
        users: users
    }
}

export default FriendReducer;