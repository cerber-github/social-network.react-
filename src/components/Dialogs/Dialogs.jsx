import React, { useState } from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router";

const Dialogs = (props) => {
    let messageElements = props.messages?.map(m => <Message key={m.id} message={m.message}/>);
    let dialogElements = props.dialogs?.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    const [dialogText, setDialogText] = useState('');

    let onSendMessageClick = () => {
        props.sendMessage(dialogText);
        setDialogText('');
    };

    let onNewMessageChange = (e) => {
        let newDialogText = e.target.value;
        setDialogText(newDialogText);
    };

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea
                            value={dialogText}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;