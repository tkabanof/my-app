const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
const ADDPOST = 'ADD-POST';

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

let store = {
    _state: {

        profile: {
            posts: [
                {message: 'Lorem ipsum dolor sit amet', likes: 15},
                {message: 'But I must explain to you how all this mistaken idea', likes: 45},
                {message: 'On the other hand, we denounce with', likes: 1},
            ],
            newPostText: 'New Post'

        },
        friends: {
            friendslist: [
                {name: 'Dima', birthday: '2000-01-01'},
                {name: 'Tim', birthday: '1900-05-15'},
                {name: 'Tanya', birthday: '2010-12-31'}
            ],
        },
        dialogsState: {
            dialogs: [
                {name: "Dima", id: '1'},
                {name: "Tim", id: '2'},
                {name: "Tanya", id: '3'}
            ],
            messages: [
                {message: 'Yoba', id: '1'},
                {message: 'Text1', id: '2'},
                {message: 'Text2', id: '3'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubsriber() {
        console.log('rerender')
    },
    subscribe(observer) {
        this._callSubsriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profile.newPostText,
                likes: 1
            }
            this._state.profile.posts.push(newPost)
            this._callSubsriber(this._state);
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profile.newPostText = action.newText;
            this._callSubsriber(this._state);
        }
    }

}

export default store;