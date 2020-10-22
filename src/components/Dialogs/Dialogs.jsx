import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

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