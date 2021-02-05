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
    ]
}

const dialogsReducer = (state = initialStore, action) => {

    switch (action.type) {
        case ADDMESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 999, message: action.newMessageBody}]
            };
        }

        default:
            return state;
    }
}
export const addMessage = (newMessageBody) => {
    return {
        type: ADDMESSAGE, newMessageBody
    }
}


export default dialogsReducer;