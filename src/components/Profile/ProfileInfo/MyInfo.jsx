import s from "./ProfileInfo.module.css";
import {SocialIcon} from 'react-social-icons';

const Social = (props) => {
    return (<SocialIcon url={props.link} network={props.network}/>)
}

const MyInfo = (props) => {

    let p = props.p;

    return (<div>
            <div className={s.description}>
                <div>
                    <p>{p.aboutMe}</p>
                    <p>{p.lookingForAJob ? "Ищу работу" : "Есть работа"}</p>
                    <p>{p.lookingForAJob ? p.lookingForAJobDescription : ""}</p>
                </div>
            </div>
            <div className={s.social}>
                <Social link={p.contacts.facebook} network={"facebook"}/>
                <Social link={p.contacts.vk} network={"vk"}/>
                <Social link={p.contacts.twitter} network={"twitter"}/>
                <Social link={p.contacts.instagram} network={"instagram"}/>
                <Social link={p.contacts.youtube} network={"youtube"}/>
                <Social link={p.contacts.github} network={"github"}/>
                <Social link={p.contacts.mainLink} network="mailto"/>
            </div>
        </div>
    )
}

export default MyInfo;

