import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import friendsReducer from "./friends-reducer.js";
import usersReducer from "./users-reducer.js";
import authReducer from "./auth-reducer.js";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(reducers);

window.store = store;

export default store;