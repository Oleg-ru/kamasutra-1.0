import React from 'react';
import Profile from "./Profile.jsx";
import axios from "axios";
import {API_BASE} from "../../constants/api.js";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer.js";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`${API_BASE}/profile/2`)
            .then((data) => {
                this.props.setUserProfile(data.data);
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

export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainer);