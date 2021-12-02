import {ADD_CHAT, ADD_MESSAGE, DEL_CHAT} from "./actions";
import { v4 as uuidv4 } from 'uuid';

const initChatsList = {
    chat1: {
        name: 'First chat',
        messages: [
            {id: 'm11', author: 'Yuriy', text: 'Hello!'},
            {id: 'm12', author: 'Bot', text: 'Hi!'},
        ]
    },
    chat2: {
        name: 'Second chat',
        messages: [
            {id: 'm21', author: 'Petr', text: 'Hi!'},
            {id: 'm22', author: 'Bot', text: 'Good day!'},
        ]
    }
};

export const chatReducer = (state = initChatsList, action ) => {
    console.log('state from reducer', state);
    switch (action.type) {
        case ADD_CHAT:
            return(
                {
                    ...state,
                    [`chat${uuidv4()}`]: {
                        name: action.name,
                        messages: []
                    }
                }
            );
        case ADD_MESSAGE:
            return(
                {
                    ...state,
                    [action.chatId]: {
                        ...state[action.chatId],
                        messages: [ ...state[action.chatId].messages, action.message ]
                    }
                }
            );
        case DEL_CHAT:
            let newState = {...state};
            delete newState[action.chatId];
            return newState;
        default:
            return state
    }
}