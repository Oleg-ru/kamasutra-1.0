import React from 'react';
import User from "./User/User.jsx";
import styles from './Users.module.css'
import {toggleIsFollowingProgress} from "../../redux/users-reducer.js";

function Users(props) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            <div className={styles.paginationContainer}>
                {pages.map(page => (
                    <button className={props.currentPage === page ? styles.currentPage : ''}
                            key={page}
                            onClick={() => props.onPageChanged(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div className={styles.usersContainer}>
                {props.users && props.users.map(({id, followed, name, status, photos: {small}}) => (
                    <User key={id}
                          id={id}
                          followed={followed}
                          fullName={name}
                          status={status}
                          location={{city: 'Город', country: 'Страна'}}
                          avatar={small ?? 'https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg'}
                          follow={props.follow}
                          unfollow={props.unfollow}
                          toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                          followingInProgress={props.followingInProgress}
                    />)
                )
                }
            </div>
        </>
    );
}

export default Users;