import React from 'react';
import Header from "./Header.jsx";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer.js";

class HeaderContainer extends React.Component {

    componentDidMount() {
        getAuthUserData();
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
    getAuthUserData
})(HeaderContainer);