import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router";

function Dialogs(props) {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/1'>Vladimir</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2'>Anton</NavLink>
                </div>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to='/dialogs/3'>Anastasia</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Hello!!!</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Allloooooo</div>
            </div>
        </div>
    );
}

export default Dialogs;