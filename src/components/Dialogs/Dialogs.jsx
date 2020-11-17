import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import NewMessage from "./addMessage/NewMessage";


const Dialogs = (props) => {
    let dialogsItem = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageItem = props.dialogs.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsItem}
            </div>
            <div>
                {messageItem}
            </div>
            <NewMessage
                dispatch={props.dispatch}
                newMessageText={props.newMessageText}
            />
        </div>
    )
}

export default Dialogs;