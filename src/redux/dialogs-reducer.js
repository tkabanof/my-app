const UPDATENEWMESSAGETEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADDMESSAGE = 'ADD-MESSAGE';


let initialStore = {
    dialogs: [
        {name: "Dima", id: '1'},
        {name: "Tim", id: '2'},
        {name: "Tanya", id: '3'}
    ],
    messages: [
        {message: 'Yoba', id: '1'},
        {message: 'Text1', id: '2'},
        {message: 'Text2', id: '3'},
    ],
    newMessageText: 'Type You message'
}

const dialogsReducer = (state = initialStore, action) => {

    switch (action.type) {
        case ADDMESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 999, message: state.newMessageText}]
            };
        }

        case UPDATENEWMESSAGETEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADDMESSAGE
    }
}

export const updatenewMessageActionCreator = (text) => {
    return {
        type: UPDATENEWMESSAGETEXT,
        newText: text
    }
}

export default dialogsReducer;