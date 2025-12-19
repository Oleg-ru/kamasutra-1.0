import React from 'react';
import styles from './DialogItem.module.css'
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

export default DialogItem;