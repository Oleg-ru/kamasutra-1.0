import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {Navigate} from "react-router";
import {Field, Form} from "react-final-form";
import FormControls from "../common/FormControls/FormControls.jsx";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators.js";

function Dialogs(props) {

    const {
        dialogsPage: {
            dialogs,
            messages,
        },
        onSendMessage,
    } = props;

    //Если не авторизованы редирект на login
    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs
                    .map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)}
            </div>
            <div className={styles.messages}>
                {messages
                    .map(message => <Message key={message.id} message={message}/>)}
                <div>
                    <MessageForm onSendMessage={onSendMessage}/>
                </div>
            </div>
        </div>
    );
}

function MessageForm(props) {

    const onSubmit = (value, form) => {
        props.onSendMessage(value.newTextMessage);
        form.restart();
    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit, form}) => (
                  <form className={styles.sendMessageContainer} onSubmit={(event) => handleSubmit(event, form)}>
                      <Field name="newTextMessage"
                             component={FormControls}
                             placeholder="Введите сообщение"
                             className={styles.textArea}
                             validate={composeValidators(requiredField, maxLengthCreator(100))}
                      />
                      <button type="submit">Send</button>
                  </form>
              )
              }
        />
    );
}

export default Dialogs;