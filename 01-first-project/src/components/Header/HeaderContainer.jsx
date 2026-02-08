import React from 'react';
import Header from "./Header.jsx";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer.js";
import {authMeAPI} from "../../api/api.js";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authMeAPI.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            }).catch((e) => {
            console.log("Ошибка при запросе: " + e)
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);