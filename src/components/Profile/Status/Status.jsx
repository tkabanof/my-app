import s from "./Status.module.css";
import {useState, useEffect} from 'react';

const Status = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [textStatus, setTextStatus] = useState(props.status);

    useEffect(() => {
        setTextStatus(props.status);
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
            props.setMyStatus(textStatus);
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