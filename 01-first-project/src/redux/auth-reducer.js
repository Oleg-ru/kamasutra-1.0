import {authMeAPI} from "../api/api.js";

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
                isAuth: true,
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
});

//санки
export const authMe = () => {
    return (dispatch) => {
        authMeAPI.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            }).catch((e) => {
            console.log("Ошибка при авторизации: " + e)
        })
    }
};

export default authReducer;