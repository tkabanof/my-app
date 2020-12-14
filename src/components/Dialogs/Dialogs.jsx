import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";

const Dialogs = (props) => {
    let dialogsItem = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageItem = props.dialogsState.messages.map(m => <Message message={m.message} key={m.id}/>)


    let onMsgChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    let addNewMesage = () => {
        props.addNewMesage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsItem}
            </div>
            <div>
                {messageItem}
            </div>
            <div>
                <div>
                <textarea
                    onChange={onMsgChange}
                    value={props.dialogsState.newMessageText}
                />
                </div>
                <div>
                    <button onClick={addNewMesage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;