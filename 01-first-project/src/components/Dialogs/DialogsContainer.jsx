import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect.jsx";

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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer
    = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;