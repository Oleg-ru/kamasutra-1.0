import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router";

function Header(props) {
    return (
        <header className={styles.header}>
            <img
                src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png"
                alt="logo"/>
            <div className={styles.loginContainer}>
                {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;