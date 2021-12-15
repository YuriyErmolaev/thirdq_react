import { onValue, set, push, remove } from '@firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { chatsRef, getChatRefById } from '../../services/firebase';

export const ADD_CHAT = 'CHATS::ADD';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DEL_CHAT = 'CHATS::DEL';

export const addChat = (id, name) => ({
    type: ADD_CHAT,
    id, name
});

export const addChatToDb = (chatName) => (dispatch) => {
    const chat = {name: chatName};        
    push(chatsRef, chat);
};



export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});

export const delChat = (chatId) => ({
    type: DEL_CHAT,
    chatId
});

export const delChatWithDelFromDb = (chatId) => (dispatch) => {
    remove( getChatRefById(chatId) );    
    dispatch( delChat(chatId) );
};


export const addMessageToDb = (chatId, message) => (dispatch) => {
    if( !getChatRefById(chatId).hasOwnProperty('messages') ){        
        set(
            getChatRefById(chatId), 
            {            
                name: getChatRefById(chatId).name,
                messages: {
                    [uuidv4()]: message
                }
            }
        );
    }    
    push(getChatRefById(chatId).messages, message);
};

export const addMessageWithReply = (chatId, message) => (dispatch) => {    
    
    dispatch( addMessageToDb(chatId, message) );

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

export const addChatToStoreWithMessages = (id, chat) => (dispatch) => {    
    dispatch( addChat(id, chat.name) );    
    if( chat.hasOwnProperty('messages') ) {
        Object.keys(chat.messages).map((msgId, i) => {                
            dispatch( addMessage(
                id, 
                chat.messages[msgId]
                )
            );
        });
    }
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

