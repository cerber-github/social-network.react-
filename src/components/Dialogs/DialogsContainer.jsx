import React from 'react';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessageCreator } from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state?.messagesPage?.dialogs || [],
        messages: state?.messagesPage?.messages || []
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
