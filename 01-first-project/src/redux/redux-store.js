import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import friendsReducer from "./friends-reducer.js";
import usersReducer from "./users-reducer.js";
import authReducer from "./auth-reducer.js";
import {thunk as thunkMiddleware} from "redux-thunk";
import appReducer from "./app-reducer.js";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;