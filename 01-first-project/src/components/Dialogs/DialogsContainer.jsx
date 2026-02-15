import {addMessageActionCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect.jsx";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (newTextMessage) => {
            dispatch(addMessageActionCreator(newTextMessage))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);