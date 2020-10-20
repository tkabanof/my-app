import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Vano
                </div>
                <div className={s.dialog}>
                    Petro
                </div>
                <div className={s.dialog}>
                    Mahno
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi u</div>
                <div className={s.message}>stupid</div>
            </div>
        </div>
    )
}

export default Dialogs;