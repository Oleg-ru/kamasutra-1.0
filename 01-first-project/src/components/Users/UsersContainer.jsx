import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer.js";
import Users from "./Users.jsx";
import axios from "axios";
import {API_BASE} from "../../constants/api.js";
import styles from './Users.module.css'
import Preloader from "../common/Preloader/Preloader.jsx";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios.get(`${API_BASE}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_BEARER_KEY}`
            }
        })
            .then((data) => {
                console.log(data.data.items)
                this.props.setUsers(data.data.items);
                // this.props.setTotalUsersCount(data.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        axios.get(`${API_BASE}/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_BEARER_KEY}`
            }
        })
            .then((data) => {
                console.log(data.data.items)
                this.props.setUsers(data.data.items)
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             users={this.props.users}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                             onPageChanged={this.onPageChanged}
                    />}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)