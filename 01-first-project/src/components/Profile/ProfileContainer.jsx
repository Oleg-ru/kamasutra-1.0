import React from 'react';
import Profile from "./Profile.jsx";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer.js";
import {useParams} from "react-router-dom";

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
        this.props.getProfile(this.props.match.params.userId)
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
    getProfile,
})(WhitsUrlContainerComponent);