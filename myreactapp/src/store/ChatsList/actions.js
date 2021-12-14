import { onValue } from '@firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { chatsRef } from '../../services/firebase';

export const ADD_CHAT = 'CHATS::ADD';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DEL_CHAT = 'CHATS::DEL';

export const addChat = (name, id) => ({
    type: ADD_CHAT,
    name, id
});

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});

export const delChat = (chatId) => ({
    type: DEL_CHAT,
    chatId
});

export const addMessageWithReply = (chatId, message) => (dispatch) => {    
    dispatch(addMessage(chatId, message));
    const botName = 'Bot';
    const newBotMessageText = 'Thank you! Your message is accepted! )';
    const newBotMessage = {
        id: uuidv4(),
        author: botName,
        text: newBotMessageText
    };
    const addBotMessage = () => {
        dispatch(addMessage(chatId, newBotMessage));
    }
    setTimeout(addBotMessage, 1500);

};

export const getAllChats = () => async (dispatch) => {
    onValue(chatsRef, (snapshot) => {    
        snapshot.forEach(chatSnap => {            
            
            const chat = chatSnap.val();
            const chatId = chatSnap.key;
            dispatch(addChat(chat.name, chatId));
            
            // console.log( 'chat.name ', chat.name );        
            
             // error
            //  Cannot read properties of undefined (reading 'messages') at chatReducer (reducer.js:68)   
            // Object.keys(chat.messages).map((msgId, i) => {                
            //     // console.log( 'chat.messages: ', chat.messages );
            //     // console.log( 'msgId: ', msgId );
            //     dispatch(addMessage(
            //         chatId, 
            //         chat.messages[msgId]
            //     ));
            // });

        })
    });    
};