import React from 'react'
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.box}>
                <div className={s.messagebox}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.mess}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
