import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import FriendReducer from "./friend-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogsState: dialogsReducer,
    friends: FriendReducer
});

let store = createStore(reducers);

export default store;