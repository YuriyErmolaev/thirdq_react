import React, { useEffect } from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {delChatWithDelFromDb, getAllChats} from "../../store/ChatsList/actions";
import {getChatList} from "../../store/ChatsList/selectors";
import ChatListV from "../ChatListV";

export const ChatList = () => {

    const chatsList = useSelector(getChatList, shallowEqual);
    const dispatch = useDispatch();

    const requestChats = () => {        
        dispatch(getAllChats());
    };
    
    useEffect(() => {        
        requestChats();
    }, []);

    const delChatHandler = (e) => {
        const chatId = e.target.dataset.chatid;
        // dispatch( delChat(chatId) );        
        dispatch( delChatWithDelFromDb(chatId) );        
    };

    return (
        <ChatListV
            chatsList={chatsList}
            delChatHandler={delChatHandler}
        />
    )
}

export default ChatList;