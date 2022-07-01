import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import { sidebarReducer } from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'Its my first post', likeCount: 25}
            ]
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 1, message: 'Haw are you?'},
                {id: 1, message: 'Yep'}
            ],
            dialogs: [
                {id: 1, name: 'Senya'},
                {id: 2, name: 'Rost'},
                {id: 3, name: 'Vlad'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Anton'}

            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;
