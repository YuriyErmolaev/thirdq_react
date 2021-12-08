import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {delChat} from "../../store/ChatsList/actions";
import {getChatList} from "../../store/ChatsList/selectors";
import ChatListV from "../ChatListV";

export const ChatList = () => {

    const chatsList = useSelector(getChatList, shallowEqual);
    const dispatch = useDispatch();

    const delChatHandler = (e) => {
        const chatId = e.target.dataset.chatid;
        dispatch( delChat(chatId) );
    };

    return (
        <ChatListV
            chatsList={chatsList}
            delChatHandler={delChatHandler}
        />
    )
}

export default ChatList;