import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import FriendReducer from "./friend-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

const store = configureStore({
    reducer: {
        profile: profileReducer,
        dialogsState: dialogsReducer,
        friends: FriendReducer,
        auth: authReducer,
        form: formReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

export default store;
