import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogs-reducer";
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
        addNewMesage: (newMessageBody) => {
            dispatch(addMessage(newMessageBody));
        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;