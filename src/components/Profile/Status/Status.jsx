import s from "./Status.module.css";
import {useState} from 'react';

const Status = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [textStatus, setTextStatus] = useState(props.status);

    const changeStatusText = (e) => {
        setTextStatus(e.currentTarget.value);
    }

    function activateEdit() {
        setEditMode(true);
    }

    function disableEdit() {
        setEditMode(false);
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