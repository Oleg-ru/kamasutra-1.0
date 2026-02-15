import React from 'react';
import Profile from "./Profile.jsx";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer.js";
import {useParams} from "react-router-dom";
import {compose} from "redux";

export function withRouter(WrappedComponent){
    //т.к не можем в классе использовать хуки
    // т.е берем оригинальный компонент и оборачиваем его передав новый пропс который берет значение из вызова хука
    return (props) => {
        const match  = {params: useParams()};
        return <WrappedComponent {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 32740;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)