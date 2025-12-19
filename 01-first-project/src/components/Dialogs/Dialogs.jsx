import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

function Dialogs(props) {

    const {
        dialogs,
        messages
    } = props;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs
                    .map(({id, name}) => <DialogItem key={id} id={id} name={name} /> )}
            </div>
            <div className={styles.messages}>
                {messages
                    .map(({id, message}) => <Message key={id} id={id} message={message} /> )}
            </div>
        </div>
    );
}

export default Dialogs;