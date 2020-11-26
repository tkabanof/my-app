const FOLLOW = 'FOLLOWACTION'
const UNFOLLOW = 'UNFOLLOW ACTION'
const SET_FRIENDS = 'SET_FRIENDS'


let initialStore =
    { items : []
        // items: [
        //     {
        //         userid: 1,
        //         avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
        //         name: 'Dima',
        //         birthday: '2000-01-01',
        //         followed: true
        //     }
        //     ,
        //     {
        //         userid: 2,
        //         avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
        //         name: 'Tanya',
        //         birthday: '2010-12-31',
        //         followed: false
        //     }
        //     ,
        //     {
        //         userid: 3,
        //         avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
        //         name: 'Tim',
        //         birthday: '2011-12-31',
        //         followed: true
        //     }
        //     ,
        //     {
        //         userid: 4,
        //         avaLink: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg',
        //         name: 'Dan',
        //         birthday: '2001-02-31',
        //         followed: true
        //     }
        // ]
    }

const FriendReducer = (state = initialStore, action) => {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.userid === action.userid) {
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
                    if (u.userid === action.userid) {
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
            return {...state, items: [state.items, ...action.friends]}
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

export const setFriendsAC = (friends) => {
    return {
        type: SET_FRIENDS,
        friends: friends
    }
}

export default FriendReducer;