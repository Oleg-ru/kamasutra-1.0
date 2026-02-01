import React, {useEffect} from 'react';
import styles from './Users.module.css'
import User from "./User/User.jsx";

function Users(props) {

    const {
        users,
        follow,
        unfollow,
        setUsers,
    } = props;

    useEffect(() => {
        setUsers([{
            id: '1',
            followed: true,
            fullName: "Oleg",
            status: "I`am study java script",
            location: {city: 'Moscow', country: 'Russia',},
            avatar: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg'
        },
            {
                id: '2',
                followed: false,
                fullName: "Andrey",
                status: "I`am study python",
                location: {city: 'Minsk', country: 'Belarus',},
                avatar: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
            },
            {
                id: '3',
                followed: true,
                fullName: "Roxy",
                status: "I`am web engineer",
                location: {city: 'New-York', country: 'USA',},
                avatar: 'https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg'
            },
        ])
    });

    return (
        <div className={styles.usersContainer}>
            {users.map(({id, followed, fullName, status, location, avatar}) => (
                <User key={id}
                      id={id}
                      followed={followed}
                      fullName={fullName}
                      status={status}
                      location={location}
                      avatar={avatar}
                      follow={follow}
                      unfollow={unfollow}
                />)
            )
            }
        </div>
    );
}

export default Users;