import {createAction} from "@reduxjs/toolkit";
import {messageStore} from "../types/mainTypes";

export const addMessage = createAction('ADDMESSAGE');

let initialStore: messageStore = {
    dialogs: [
        {name: "Dima", id: 1},
        {name: "Tim", id: 2},
        {name: "Tanya", id: 3}
    ],
    messages: [
        {message: 'Yoba', id: 1},
        {message: 'Text1', id: 2},
        {message: 'Text2', id: 3},
    ]
}

function getRandomInt(max: number, min: number) {
    return Math.floor(Math.random() * Math.floor(max) + min);
}

const dialogsReducer = (state = initialStore, action: any) => {

    switch (action.type) {
        case addMessage.type: {
            return {
                ...state,
                messages: [...state.messages, {id: getRandomInt(1000, 10), message: action.payload}]
            };
        }
        default:
            return state;
    }
}

export default dialogsReducer;