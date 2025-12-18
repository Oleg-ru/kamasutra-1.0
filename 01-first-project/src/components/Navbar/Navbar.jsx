import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router";

function Navbar() {

    const navStyle = ({isActive}) => (isActive ? `${styles.activeLink} ${styles.item}` : `${styles.item}`);
    
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={navStyle}>Profile</NavLink>
            <NavLink to="/dialogs/*" className={navStyle}>Message</NavLink>
            <NavLink to="/news" className={navStyle}>News</NavLink>
            <NavLink to="/music" className={navStyle}>Music</NavLink>
            <NavLink to="/settings" className={navStyle}>Settings</NavLink>
        </nav>
    );
}

export default Navbar;