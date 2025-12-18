import React from 'react';
import styles from './Dialogs.module.css'

function Dialogs(props) {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    Vladimir
                </div>
                <div className={styles.dialog}>
                    Anton
                </div>
                <div className={styles.dialog + ' ' + styles.active}>
                    Anastasia
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