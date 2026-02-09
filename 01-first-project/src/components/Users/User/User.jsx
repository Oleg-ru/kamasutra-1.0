import styles from './User.module.css'
import React from 'react';
import {NavLink} from "react-router";

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

    const onClickFollow = () => followed ? unfollow(id) : follow(id);

    return (
        <div className={styles.user}>
            <div className={styles.avatarWithActions}>
                <NavLink to={`/profile/${id}`}>
                    <img className={styles.avatar} src={avatar} alt="avatar"/>
                </NavLink>
                <button className={styles.actionBtn}
                        onClick={onClickFollow}
                        disabled={props.followingInProgress.some(userId => userId === id)}
                >
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