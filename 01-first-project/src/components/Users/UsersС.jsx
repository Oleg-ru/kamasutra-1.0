import React from 'react';
import styles from './Users.module.css'
import User from "./User/User.jsx";
import axios from "axios";
import {API_BASE} from "../../constants/api.js";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`${API_BASE}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((data) => {
                console.log(data.data.items)
                this.props.setUsers(data.data.items);
                this.props.setTotalUsersCount(data.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`${API_BASE}/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((data) => {
                console.log(data.data.items)
                this.props.setUsers(data.data.items)
            })
    }

    render() {

        console.log(this.props)

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                <div className={styles.paginationContainer}>
                    {pages.map(page => (
                        <button className={this.props.currentPage === page && styles.currentPage}
                                onClick={() => this.onPageChanged(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
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
            </>
        )
    }
}

export default Users;