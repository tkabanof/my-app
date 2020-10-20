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
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Dim" id="1"/>
                <DialogItem name="Tim" id="2"/>
                <DialogItem name="Sanya" id="3"/>
                <DialogItem name="Tanya" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Yoba"/>
                <Message message="Text1"/>
                <Message message="Txet2"/>
                <Message message="Hollo Friends"/>
            </div>
        </div>
    )
}

export default Dialogs;