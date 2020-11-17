import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogsState: dialogsReducer
});

let store = createStore(reducers);

export default store;