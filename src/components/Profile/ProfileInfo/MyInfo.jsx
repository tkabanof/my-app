import s from "./ProfileInfo.module.css";
import {SocialIcon} from 'react-social-icons';

const Social = (props) => {
    return (<div>
        <SocialIcon url={props.link} network={props.network}/>
        <a> </a>
        {props.link}
    </div>)
}

const MyInfo = (props) => {

    let p = props.p;

    return (
        <div className={s.description}>

            <p>{p.aboutMe}</p>
            <Social link={p.contacts.facebook} network={"facebook"}/>
            <Social link={p.contacts.vk} network={"vk"}/>
            <Social link={p.contacts.twitter} network={"twitter"}/>
            <Social link={p.contacts.instagram} network={"instagram"}/>
            <Social link={p.contacts.youtube} network={"youtube"}/>
            <Social link={p.contacts.github} network={"github"}/>
            <Social link={p.contacts.mainLink} network="mailto"/>
            <div>
                <p>{p.lookingForAJob ? "Ищу работу" : "Есть работа"}</p>
                <p>{p.lookingForAJob ? p.lookingForAJobDescription : ""}</p>
            </div>

        </div>
    )
}

export default MyInfo;

