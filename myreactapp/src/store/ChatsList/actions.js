import { onValue, push } from '@firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { chatsRef, db } from '../../services/firebase';

export const ADD_CHAT = 'CHATS::ADD';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DEL_CHAT = 'CHATS::DEL';

export const addChat = (id, name) => ({
    type: ADD_CHAT,
    id, name
});

export const addChatWithAddToDb = (chatName) => (dispatch) => {
    const chat = {        
        name: chatName,
        messages: {
            empty: true
        }
    };        
    push(chatsRef, chat);
}

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

export const addChatToStoreWithMessages = (id, chat) => (dispatch, getState) => {    
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
            dispatch(   
                addChatToStoreWithMessages( 
                    chatSnap.key, 
                    chatSnap.val() 
                )
            );
        })
    });    
};

