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
                id: 5,
                message: state.newPostText,
                likes: 1
            }

            state.posts.push(newPost)
            return state;
        }

        case UPDATENEWPOSTTEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = {...state.newPostText}
            stateCopy.newPostText = action.newText;
            return stateCopy;
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