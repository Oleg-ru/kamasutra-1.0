import React from 'react';
import User from "./User/User.jsx";
import styles from './Users.module.css'
import Paginator from "../common/Paginator/Paginator.jsx";

function Users(props) {

    return (
        <>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
            />
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