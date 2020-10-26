import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";



let dialogs = [
    {name: "Dima", id: '1'},
    {name: "Tim", id: '2'},
    {name: "Tanya", id: '3'}
]

let dialogsItem = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

let messages = [
    {message: 'Yoba', id: '1'},
    {message: 'Text1', id: '2'},
    {message: 'Text2', id: '3'},
]
let messageItem = messages.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsItem}
            </div>
            <div>
                {messageItem}
            </div>
        </div>
    )
}

export default Dialogs;