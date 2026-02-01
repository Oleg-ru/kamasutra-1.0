import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router";
import TopFriends from "../Friends/TopFriends/TopFriends.jsx";

function Navbar(props) {

    const {store} = props;

    const navStyle = ({isActive}) => (isActive ? `${styles.activeLink} ${styles.item}` : `${styles.item}`);
    
    return (
            <nav className={styles.nav}>
                <NavLink to="/profile" className={navStyle}>Profile</NavLink>
                <NavLink to="/dialogs/*" className={navStyle}>Message</NavLink>
                <NavLink to="/users" className={navStyle}>Users</NavLink>
                <NavLink to="/news" className={navStyle}>News</NavLink>
                <NavLink to="/music" className={navStyle}>Music</NavLink>
                <NavLink to="/settings" className={navStyle}>Settings</NavLink>
                <NavLink to="/friends" className={navStyle}>Friends</NavLink>
                {/*<TopFriends friendsPage={store.getState().friendsPage}/>*/}
            </nav>
    );
}

export default Navbar;