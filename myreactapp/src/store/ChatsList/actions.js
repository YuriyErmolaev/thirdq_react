export const ADD_CHAT = 'CHATS::ADD';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DEL_CHAT = 'CHATS::DEL';

export const addChat = (name) => ({
    type: ADD_CHAT,
    name
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