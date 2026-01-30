import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.js";

function Dialogs(props) {

    const {
        state: {
            dialogs,
            messages,
            newMessageText,
        },
        dispatch,
    } = props;

    const sendMessage = () => {
        dispatch(addMessageActionCreator())
    };

    const updateChangeMessage = (e) => {
        dispatch(updateNewMessageTextActionCreator(e.target.value))
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs
                    .map(dialog => <DialogItem key={dialog.id} dialog={dialog}/> )}
            </div>
            <div className={styles.messages}>
                {messages
                    .map(message => <Message key={message.id} message={message}/> )}
                <div className={styles.sendMessageContainer}>
                    <textarea className={styles.textArea}
                              onChange={updateChangeMessage}
                              value={newMessageText}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;