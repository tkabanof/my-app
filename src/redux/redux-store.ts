import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import FriendReducer from "./friend-reducer";
import {reducer as formReducer} from 'redux-form'
import {Action, configureStore, getDefaultMiddleware, ThunkAction} from "@reduxjs/toolkit";
import authReducer from "./authSlice";


const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;