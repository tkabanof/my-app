import Dialogs from "./Dialogs";
import {addMessageActionCreator, updatenewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;