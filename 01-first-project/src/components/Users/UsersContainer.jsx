import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer.js";
import Users from "./Users.jsx";
import axios from "axios";
import {API_BASE} from "../../constants/api.js";

class UsersContainer extends React.Component {

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
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
        />
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)