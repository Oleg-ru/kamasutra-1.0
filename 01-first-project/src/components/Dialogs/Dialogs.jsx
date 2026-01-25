import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

function Dialogs(props) {

    const {
        state: {
            dialogs,
            messages
        }
    } = props;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs
                    .map(dialog => <DialogItem key={dialog.id} dialog={dialog}/> )}
            </div>
            <div className={styles.messages}>
                {messages
                    .map(message => <Message key={message.id} message={message}/> )}
            </div>
        </div>
    );
}

export default Dialogs;