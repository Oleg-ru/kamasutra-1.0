import React from 'react';
import styles from './FormControls.module.css'
import { clsx } from 'clsx';

function FormControls({input, meta, ...props} ) {
    const hasError = meta.error && meta.touched;

    const classNames = clsx({
        ...props.styles,
        [styles.textarea]: true,
        [styles.error]: hasError,
    })

    return (
        <div className={styles.textareaContainer}>
            {hasError && <span className={styles.errorMessage}>{meta.error}</span>}
            <textarea {...input} {...props} className={classNames}/>
        </div>
    );
}

export default FormControls;