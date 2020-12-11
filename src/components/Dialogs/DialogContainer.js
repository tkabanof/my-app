import Dialogs from "./Dialogs";
import {addMessageActionCreator, updatenewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsState
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updatenewMessageActionCreator(text));
        },
        addNewMesage: () => {
            dispatch(addMessageActionCreator());
            dispatch(updatenewMessageActionCreator(''));
        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;