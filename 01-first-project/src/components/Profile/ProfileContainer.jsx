import React from 'react';
import Profile from "./Profile.jsx";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer.js";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api.js";

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
        let profileId = this.props.match.params.userId;
        if (!profileId) {
            profileId = 2;
        }

        profileAPI.getProfile(profileId)
            .then((data) => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
    setUserProfile,
})(WhitsUrlContainerComponent);