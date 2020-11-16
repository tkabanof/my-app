import profileReducer from "./profile-reducer";

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
        //..
    },
    subscribe(observer) {
        this._callSubsriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._callSubsriber(this._state);
    }
}
export default store;