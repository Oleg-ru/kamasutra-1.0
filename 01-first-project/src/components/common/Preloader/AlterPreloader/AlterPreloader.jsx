import React from 'react';
import styles from "./AlterPreloader.module.css";
import {clsx} from "clsx";

function AlterPreloader(props) {

    const className = clsx({
        [styles.loaderContainer]: true,
    }, props.styles);

    return (
        <div className={className}>
            <span className={styles.loader}/>
        </div>
    );
}

export default AlterPreloader;