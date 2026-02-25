import {authAPI, securityAPI} from "../api/api.js";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl,
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
});

//санки
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authMe();

    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
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
export const login = (email, password, rememberMe, setError, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    debugger
    if (response.resultCode === 0) {
        dispatch(getAuthUserDataPostLogin(response.data.token));
    } else {
        if(response.resultCode === 10) {

            dispatch(getCaptchaUrl())
        }
        setError(response);
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export default authReducer;