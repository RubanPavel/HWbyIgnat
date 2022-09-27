import React from 'react'

import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={s.messageWrapper}>
            <div className={s.avatarImg}>
                <img src={props.avatar}/>
            </div>
<div className={s.messageBody}>
            <div className={s.messageInfo}>
                <div className={s.messageName}> {props.name}</div>
                <div>{props.message}</div>
            </div>


            <div className={s.timeStyle}>
                <div>{props.time}</div>
            </div>
</div>
        </div>
    )
}

export default Message
