import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebarReducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlewear from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddlewear));

window.store = store;


export default store;