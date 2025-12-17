import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={styles.item}>Profile</NavLink>
            <NavLink to="/dilaogs" className={`${styles.item} ${styles.active}`}>Message</NavLink>
            <NavLink to="/news" className={styles.item}>News</NavLink>
            <NavLink to="/music" className={styles.item}>Music</NavLink>
            <NavLink to="/settings" className={styles.item}>Settings</NavLink>
        </nav>
    );
}

export default Navbar;