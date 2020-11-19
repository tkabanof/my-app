import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updatenewMessageActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onMessageChange = (text) => {
        let updatepostaction = updatenewMessageActionCreator(text);
        props.store.dispatch(updatepostaction);
    }

    let addNewMesage = () => {
        let addpostaction = addMessageActionCreator();
        let updatepostaction = updatenewMessageActionCreator('');
        props.store.dispatch(addpostaction);
        props.store.dispatch(updatepostaction);
    }

    return (
        <Dialogs onMessageChange={onMessageChange}
                 addNewMesage={addNewMesage}
                 newMessageText={state.dialogsState.newMessageText}
                 dialogs={state.dialogsState.dialogs}
                 messages={state.dialogsState.messages}
        />
    )
}

export default DialogsContainer;