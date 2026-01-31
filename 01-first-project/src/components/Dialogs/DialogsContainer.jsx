import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import StoreContext from "../../StoreContext.js";

function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState();

                    const sendMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    };

                    const updateChangeMessage = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    };

                    return <Dialogs dialogs={state.dialogsPage.dialogs}
                                    messages={state.dialogsPage.messages}
                                    newMessageText={state.dialogsPage.newMessageText}
                                    onSendMessage={sendMessage}
                                    onUpdateChangeMessage={updateChangeMessage}
                    />
                }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;