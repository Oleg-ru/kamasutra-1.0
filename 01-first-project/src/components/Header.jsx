import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img
                src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png"
                alt="logo"/>
        </header>
    );
}

export default Header;