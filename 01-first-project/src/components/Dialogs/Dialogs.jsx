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

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Vladimir' id='1'/>
                <DialogItem name='Anton' id='2'/>
                <DialogItem name='Anastasia' id='3'/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="Hello!!!"/>
                <Message message="How are you?"/>
                <Message message="Allloooooo"/>
                <Message message="By"/>
            </div>
        </div>
    );
}

export default Dialogs;