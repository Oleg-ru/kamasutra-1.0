import React from 'react';
import Header from "./Header.jsx";
import {connect} from "react-redux";
import {authMe, setAuthUserData} from "../../redux/auth-reducer.js";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {
    setAuthUserData,
    authMe
})(HeaderContainer);