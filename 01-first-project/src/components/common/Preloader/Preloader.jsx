import React from 'react';
import styles from "./Preloader.module.css";
import {clsx} from "clsx";

function Preloader(props) {

    const className = clsx({
        [styles.loaderContainer]: true,
    }, props.styles);

    return (
        <div className={className}>
            <span className={styles.loader}/>
        </div>
    );
}

export default Preloader;