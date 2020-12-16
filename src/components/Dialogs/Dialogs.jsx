import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import {Field, reduxForm} from "redux-form";

const DialogInputForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"input"} name={"newMessageBody"} placeholder={"Type new message"} />
        </div>
        <div>
            <button>Send Message</button>
        </div>
    </form>)
};

const ReduxDialogInputForm = reduxForm({
    form: "newMessageInput"
})(DialogInputForm)

const Dialogs = (props) => {
    let dialogsItem = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageItem = props.dialogsState.messages.map(m => <Message message={m.message} key={m.id}/>)

    let onSubmit = (inputData) =>{
        props.addNewMesage(inputData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsItem}
            </div>
            <div>
                {messageItem}
            </div>
            <ReduxDialogInputForm onSubmit={onSubmit} />
        </div>
    )
}

export default Dialogs;