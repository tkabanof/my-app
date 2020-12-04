const SET_USER_DATA = 'SET_USER_DATA'

let initialStore = {
    userid: 1,
    email: null,
    login: null,
    isFetching: null,
    isAuth: null
}

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}
export const setUserData = (userid, email, login) => ({type: SET_USER_DATA, data: {userid, email, login}})

export default authReducer;