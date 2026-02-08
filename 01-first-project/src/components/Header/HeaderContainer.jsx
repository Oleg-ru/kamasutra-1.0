import React from 'react';
import Header from "./Header.jsx";
import {connect} from "react-redux";
import axios from "axios";
import {API_BASE} from "../../constants/api.js";
import {setAuthUserData} from "../../redux/auth-reducer.js";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`${API_BASE}/auth/me`,
            {
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_BEARER_KEY}`
                }
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
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