import React, {useEffect} from 'react';
import styles from './Users.module.css'
import User from "./User/User.jsx";
import axios from "axios";
import {API_BASE} from "../../api/api.js";

const usersData = [
    {
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
]

function Users_fun(props) {

    const {
        users,
        follow,
        unfollow,
        setUsers,
    } = props;

    useEffect(() => {
        axios.get(`${API_BASE}/users`)
            .then((data) => {
                console.log(data.data.items)
                setUsers(data.data.items)
            })

        // setUsers(usersData)
    }, []);

    return (
        <div className={styles.usersContainer}>
            {users && users.map(({id, followed, name, status}) => (
                <User key={id}
                      id={id}
                      followed={followed}
                      fullName={name}
                      status={status}
                      location={{city: 'Город', country: 'Страна'}}
                      avatar={'https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg'}
                      follow={follow}
                      unfollow={unfollow}
                />)
            )
            }
        </div>
    );
}

export default Users_fun;