const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
const ADDPOST = 'ADD-POST';

let initialState = {
    posts: [
        {message: 'Lorem ipsum dolor sit amet', likes: 15},
        {message: 'But I must explain to you how all this mistaken idea', likes: 45},
        {message: 'On the other hand, we denounce with', likes: 1},
    ],
    newPostText: 'New Post'
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
                posts: [...state.posts, newPost]
            };
        }

        case UPDATENEWPOSTTEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADDPOST
    }
}

export const updatenewpostActionCreator = (text) => {
    return {
        type: UPDATENEWPOSTTEXT,
        newText: text
    }
}

export default profileReducer;