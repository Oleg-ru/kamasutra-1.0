import React from 'react';
import styles from "./Preloader.module.css";

function Preloader(props) {
    return (
        <div className={styles.loaderContainer}>
            <span className={styles.loader}/>
        </div>
    );
}

export default Preloader;