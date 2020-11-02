import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.item}>
            <div className={s.userAva}>
                <img src='https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg'/>
            </div>
            <div className={s.name}>
                <div>
                    {props.name}
                </div>
                <div>{
                    props.birthday}
                </div>

            </div>
        </div>
    )
}

export default Friend;