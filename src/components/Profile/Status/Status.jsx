import s from "./Status.module.css";
import {useState, useEffect} from 'react';

const Status = (props) => {

    console.log('props ' + props.status);

    const [editMode, setEditMode] = useState(false);
    const [textStatus, setTextStatus] = useState(props.status);

    console.log('useState text status ' + textStatus);

    useEffect(() => {
        setTextStatus(props.status);
        console.log('эффект');
    }, [props.status]);

    const changeStatusText = (e) => {
        setTextStatus(e.currentTarget.value);
    }

    function activateEdit() {
        if (props.me) {
            setEditMode(true);
        }
    }

    function disableEdit() {
        setEditMode(false);
        if (textStatus !== props.status) {
            console.log('Изменение статуса. Новый статус ' + textStatus);
            props.setMyStatus(textStatus);
        } else {
            console.log('статус отсался прежним');
        }

    }

    return (
        <div className={s.status}>
            <p>STATUS</p>
            {!editMode &&
            <div>
                <span
                    onDoubleClick={activateEdit}
                >{"Status " + textStatus}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={disableEdit}
                       onChange={changeStatusText}
                       value={textStatus}/>
            </div>
            }
        </div>
    )

}
export default Status;