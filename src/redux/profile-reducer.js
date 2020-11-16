const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
const ADDPOST = 'ADD-POST';

export const profileReducer = (state, action) => {

    switch (action.type) {
        case ADDPOST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 1
            }
            state.posts.push(newPost)
            return state;

        case UPDATENEWPOSTTEXT:
            state.newPostText = action.newText;

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