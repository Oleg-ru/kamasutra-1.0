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
/* //TODO
С заделом на будущее сделать возврат промиса:
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        try {
            const data = await authAPI.login(email, password, rememberMe);

            if (data.resultCode === 0) {
                // Успешный логин → получаем данные пользователя
                dispatch(getAuthUserDataPostLogin(data.data.token));
                return { success: true };
            } else {
                // Ошибка с сервера (например, неверный пароль)
                const message = data.messages?.length ? data.messages[0] : 'Login failed';
                return { success: false, message };
            }
        } catch (error) {
            // Сетевая ошибка
            return { success: false, message: 'Network error. Please try again.' };
        }
    };
};

и в форме сделать:

const onSubmit = async (values) => {
        // Вызываем login и ждём результата
        const result = await dispatch(login(values.email, values.password, values.rememberMe));

        if (!result.success) {
            // Возвращаем ошибку в форму
            return { [FORM_ERROR]: result.message };
        }

        // Успех — форма сама сбросится
    };
 */
export const login = (email, password, rememberMe, setError) => {
    debugger
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataPostLogin(data.data.token));
                }
                else {
                    setError(data);
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