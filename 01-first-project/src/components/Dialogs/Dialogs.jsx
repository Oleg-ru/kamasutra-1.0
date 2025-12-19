import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router";

const DialogItem = (props) => {

    const {
        name,
        id
    } = props;

    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
};

const Message = (props) => {

    const {
        message,
    } = props;

    return (
        <div className={styles.message}>{message}</div>
    )
};

const dialogsData = [
    {id: 1, name: 'Vladimir'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Anastasia'},
];

const messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello!!!"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Allloooooo"},
    {id: 5, message: "By"},
];

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsData
                    .map(({id, name}) => <DialogItem key={id} id={id} name={name} /> )}
            </div>
            <div className={styles.messages}>
                {messageData
                    .map(({id, message}) => <Message key={id} id={id} message={message} /> )}
            </div>
        </div>
    );
}

export default Dialogs;