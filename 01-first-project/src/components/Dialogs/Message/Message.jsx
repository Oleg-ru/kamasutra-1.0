import React from 'react';
import styles from './Message.module.css'
import clsx from "clsx";

const Message = (props) => {

    const {
        message: {
            message,
            isSelf,
            avatar,
        }
    } = props;

    const classes = clsx({
        [styles.message]: true,
        [styles.myMessage]: isSelf,
        [styles.interlocutorMessage]: !isSelf,
    })

    return (
        <div className={classes}>
            <img className={styles.avatar} src={avatar} alt="avatar_message"/>
            {message}
        </div>
    )
};

export default Message;