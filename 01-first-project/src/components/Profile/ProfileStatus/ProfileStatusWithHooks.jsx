import styles from './ProfileStatus.module.css'

import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    const {
        status: inputStatus,
        updateStatus
    } = props;

    const [status, setStatus] = useState(inputStatus);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(inputStatus);
    }, [inputStatus]);


    const activateMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(editMode);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
            {
                editMode
                    ? <div>
                        <input onBlur={deactivateEditMode}
                               onChange={onStatusChange}
                               type="text"
                               value={status}
                               autoFocus={true}
                        />
                    </div>
                    : <span onDoubleClick={activateMode} >
                            {status ?? 'Статус не задан'}
                        </span>
            }
        </>
    );
}

export default ProfileStatusWithHooks;