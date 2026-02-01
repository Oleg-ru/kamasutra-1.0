import styles from './User.module.css'

import React from 'react';

function User(props) {

    const {
        id,
        followed,
        fullName,
        status,
        location: {
            city,
            country,
        },
        avatar,
        follow,
        unfollow
    } = props;

    const onClickFollow = () => {
        followed ? unfollow(id) : follow(id);
    };

    return (
        <div className={styles.user}>
            <div className={styles.avatarWithActions}>
                <img className={styles.avatar} src={avatar} alt="avatar"/>
                <button className={styles.actionBtn}
                        onClick={onClickFollow}>
                    {followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div className={styles.userInfoContainer}>
                <p className={styles.fullName}>{fullName}</p>
                <p className={styles.status}>{status}</p>
                <p className={styles.location}>{`${city}, ${country} `}</p>
            </div>
        </div>
    );
}

export default User;