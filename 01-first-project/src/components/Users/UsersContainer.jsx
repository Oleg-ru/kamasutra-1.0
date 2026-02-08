import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer.js";
import Users from "./Users.jsx";
import Preloader from "../common/Preloader/Preloader.jsx";
import {usersAPI} from "../../api/api.js";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
                // this.props.setTotalUsersCount(data.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
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
                             followingInProgress={this.props.followingInProgress}
                             toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
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
    toggleIsFollowingProgress,
})(UsersContainer)