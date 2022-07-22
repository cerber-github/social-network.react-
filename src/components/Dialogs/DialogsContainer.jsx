import React from 'react';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import {Navigate} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponents = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponents);

export default DialogsContainer;
