import styles from './User.module.css'

import React from 'react';
import {NavLink} from "react-router";
import axios from "axios";
import {API_BASE} from "../../../constants/api.js";

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

        if (followed) {
            axios.delete(`${API_BASE}/follow/${id}`, {
                headers: {
                    "API-KEY": `${import.meta.env.VITE_API_KEY}`,
                    "Authorization": `Bearer ${import.meta.env.VITE_BEARER_KEY}`
                }
            })
            unfollow(id)
        } else {
            axios.post(`${API_BASE}/follow/${id}`,
                {}, {
                headers: {
                    "API-KEY": `${import.meta.env.VITE_API_KEY}`,
                    "Authorization": `Bearer ${import.meta.env.VITE_BEARER_KEY}`
                }
                })
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        follow(id)
                    }
                })
        }
    };

    return (
        <div className={styles.user}>
            <div className={styles.avatarWithActions}>
                <NavLink to={`/profile/${id}`} >
                    <img className={styles.avatar} src={avatar} alt="avatar"/>
                </NavLink>
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