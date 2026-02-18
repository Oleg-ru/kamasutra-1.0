import {authAPI} from "../api/api.js";
import {getAuthUserData} from "./auth-reducer.js";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initState = {
    initialized: false,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
});

//санки
export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
};

export default appReducer;