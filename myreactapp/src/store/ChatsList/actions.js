import { onValue, set, push, remove, child } from '@firebase/database';
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


export const addMessageToDb = (chatId, message) => (dispatch, getState) => {
    
    let dbChatObj;
    onValue(getChatRefById(chatId), (snapChat) => {    
        dbChatObj = snapChat.val()
    });    

    if( !dbChatObj.hasOwnProperty('messages') ){    
        set(
            getChatRefById(chatId), 
            {            
                name: getState().chatsList[chatId].name,
                messages: {
                    [uuidv4()]: message
                }
            }
        );
    } else {                
        push( child(getChatRefById(chatId), 'messages'), message );
    }

};

export const addMessageWithReply = (chatId, message) => (dispatch) => {    
    
    dispatch( addMessageToDb(chatId, message) );    
        
    const botMessage = {
        id: uuidv4(),
        author: 'Bot',
        text: 'Thank you! Your message is accepted! )'
    };
    const addBotMessage = () => {        
        dispatch( addMessageToDb(chatId, botMessage) );
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

