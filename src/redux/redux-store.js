import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profile: profileReducer
});

let store = createStore(reducers);

export default store;