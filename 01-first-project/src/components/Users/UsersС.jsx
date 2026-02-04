import React from 'react';
import styles from './Users.module.css'
import User from "./User/User.jsx";
import axios from "axios";
import {API_BASE} from "../../constants/api.js";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`${API_BASE}/users`)
            .then((data) => {
                console.log(data.data.items)
                this.props.setUsers(data.data.items)
            })
    }

    render() {
        return (
            <div className={styles.usersContainer}>
                {this.props.users && this.props.users.map(({id, followed, name, status}) => (
                    <User key={id}
                          id={id}
                          followed={followed}
                          fullName={name}
                          status={status}
                          location={{city: 'Город', country: 'Страна'}}
                          avatar={'https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg'}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                    />)
                )
                }
            </div>
        )
    }
}

export default Users;