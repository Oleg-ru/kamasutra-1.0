import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import friendsReducer from "./friends-reducer.js";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
})

const store = createStore(reducers);

export default store;