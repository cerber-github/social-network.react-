const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Haw are you?'},
        {id: 3, message: 'Yep'}
    ],
    dialogs: [
        {id: 1, name: 'Tania'},
        {id: 2, name: 'Rost'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Anton'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let stateCopy = {
                ...state,
                message: [...state.messages]
            };
            let newMessage = {
                id: state.messages.length + 1,
                message: action.message
            };
            stateCopy.messages.push(newMessage);
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        message: newMessage
    }
}

export default dialogsReducer;