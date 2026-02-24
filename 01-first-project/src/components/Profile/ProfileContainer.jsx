import React from 'react';
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer.js";
import { useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { Navigate } from "react-router";

export function withRouter(WrappedComponent) {
    return (props) => {
        const match = { params: useParams(), navigate: useNavigate() };
        return <WrappedComponent {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.refreshProfile();
    }

    refreshProfile = () => {
        const { isAuth, authorizedUserId, match } = this.props;
        const userId = match.params.userId;

        // Определяем ID профиля: из URL или свой
        let profileId = userId || authorizedUserId;
        if (profileId) {
            this.props.getUserProfile(profileId);
            this.props.getStatus(profileId);
        }
    };

    render() {
        const { isAuth, authorizedUserId } = this.props;
        // 🔴 Проверяем авторизацию ДО рендера
        if (this.props.match.params.userId) {
            return <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} />
        }
        if (!isAuth) {
            return <Navigate to="/login" replace />;
        }

        // Можно добавить загрузку, если profile ещё не пришёл
        //if (!this.props.profile) return <div>Loading...</div>;

        return <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
)(ProfileContainer);