import React from "react";
import {addMessageActionCreator, updatenewMessageActionCreator} from "../../../redux/dialogs-reducer";

const NewMessage = (props) => {

    let onMessageChange = (e) => {
        let text = e.target.value;
        let updatepostaction = updatenewMessageActionCreator(text);
        props.dispatch(updatepostaction);
    }

    let addNewMesage = () => {
        let addpostaction = addMessageActionCreator();
        let updatepostaction = updatenewMessageActionCreator('');
        props.dispatch(addpostaction);
        props.dispatch(updatepostaction);
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={props.newMessageText}
                />
            </div>
            <div>
                <button onClick={addNewMesage}>Send Message</button>
            </div>
        </div>
    )
}


export default NewMessage;