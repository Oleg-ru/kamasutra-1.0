import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateChangeMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

const DialogsContainer
    = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;