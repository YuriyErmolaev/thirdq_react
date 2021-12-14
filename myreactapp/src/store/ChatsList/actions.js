import { onValue } from '@firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { chatsRef } from '../../services/firebase';

export const ADD_CHAT = 'CHATS::ADD';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DEL_CHAT = 'CHATS::DEL';

export const addChat = (id, name) => ({
    type: ADD_CHAT,
    id, name
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


export const addChatWithThunk = (id, chat) => (dispatch, getState) => {    
    dispatch( addChat(id, chat.name) );    
    Object.keys(chat.messages).map((msgId, i) => {                
        dispatch( addMessage(
            id, 
            chat.messages[msgId]
            )
        );
    });
};

export const getAllChats = () => (dispatch) => {
    onValue(chatsRef, (snapshot) => {    
        snapshot.forEach(chatSnap => {            
            dispatch(addChatWithThunk(chatSnap.key, chatSnap.val()));
        })
    });    
};

