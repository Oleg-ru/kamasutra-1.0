import {authAPI} from "../api/api.js";

const SET_USER_DATA = 'SET-USER-DATA';

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
});

//санки
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            }).catch((e) => {
            console.log("Ошибка при авторизации: " + e)
        })
    }
};

//костыль, т.к куки не работают. Что делает: пихает полученный токен в auth/me
const getAuthUserDataPostLogin = (token) => {
    return (dispatch) => {
        authAPI.authMePostLogin(token)
            .then((data) => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            }).catch((e) => {
            console.log("Ошибка при авторизации: " + e)
        })
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataPostLogin(data.data.token))
                }
            }).catch((e) => {
            console.log("Ошибка логинизации: " + e)
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }).catch((e) => {
            console.log("Ошибка логинизации: " + e)
        })
    }
};

export default authReducer;