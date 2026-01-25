import React from 'react';
import styles from './DialogItem.module.css'
import {NavLink} from "react-router";

const DialogItem = (props) => {

    const {
        dialog: {
            name,
            id,
            avatar,
            self
        }
    } = props;

    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${id}`}>
                <img className={styles.avatar} src={avatar} alt="avatar"/>
                {name}
            </NavLink>
        </div>
    )
};

export default DialogItem;