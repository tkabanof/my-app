import s from "./ProfileInfo.module.css";
import {SocialIcon} from 'react-social-icons';
import {Checkbox, FormControlLabel, Switch, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";


const InputField = (props) => {
    return (<div>
        <a href={props.link}><SocialIcon url={props.link} network={props.network}/>
            <a> </a>
            {!props.editMode && props.link}
            {props.editMode && <TextField id="standard-basic" label={props.link}/>}
        </a>
    </div>)
}

const MyInfo = (props) => {

    let p = props.p;

    let [editMode, setEditMode] = useState(false);

    useEffect(() =>{

        },
        [editMode])

    return (
        <div className={s.description}>
            {props.me &&
            <FormControlLabel
                control={<Switch size="small" checked={editMode} onChange={() => {
                    setEditMode(!editMode)
                }}/>}
                label="Режим редактирования"
            />}

            <p>{p.aboutMe}</p>
            <InputField link={p.contacts.facebook} editMode={editMode} network={"facebook"}/>
            <p></p>
            <InputField link={p.contacts.vk} editMode={editMode} network={"vk"}/>
            <p></p>
            <InputField link={p.contacts.twitter} editMode={editMode} network={"twitter"}/>
            <p></p>
            <InputField link={p.contacts.instagram} editMode={editMode} network={"instagram"}/>
            <p></p>
            <InputField link={p.contacts.youtube} editMode={editMode} network={"youtube"}/>
            <p></p>
            <InputField link={p.contacts.github} editMode={editMode} network={"github"}/>
            <p></p>
            <InputField link={p.contacts.mainLink} editMode={editMode} network="mailto"/>

            {!props.editMode &&
            <div>
                <p>{p.lookingForAJob ? "Ищу работу" : "Есть работа"}</p>
                <p>{p.lookingForAJob ? p.lookingForAJobDescription : ""}</p>
            </div>}
            {!props.editMode &&
            <FormControlLabel
                //disabled = {!props.editMode}
                control={
                    <Checkbox name="checkedD" checked={!p.lookingForAJob} />} label={"Есть работа"} />
            }

        </div>
    )
}

export default MyInfo;

