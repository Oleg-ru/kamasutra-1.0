import React from 'react';
import styles from './FormControls.module.css'
import { clsx } from 'clsx';

export const FormControls = ({input, meta, componentType = 'input', ...props}) => {
    const hasError = meta.touched && meta.error;

    const className = clsx({
        [styles.input]: componentType === 'input',
        [styles.textarea]: componentType === 'textarea',
        [styles.error]: hasError,
    }, props.styles);

    return (
        <div className={styles.container}>
            {React.createElement(componentType, {
                ...input,
                ...props,
                className
            })}
            {hasError && <span className={styles.errorMessage}>{meta.error}</span>}
        </div>
    )
}