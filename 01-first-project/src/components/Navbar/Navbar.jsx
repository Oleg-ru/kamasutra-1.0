import React from 'react';
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <a className={styles.item}>Profile</a>
            <a className={`${styles.item} ${styles.active}`}>Message</a>
            <a className={styles.item}>News</a>
            <a className={styles.item}>Music</a>
            <a className={styles.item}>Settings</a>
        </nav>
    );
}

export default Navbar;