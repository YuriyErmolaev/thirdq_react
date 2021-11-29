import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {List, ListItem, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delChat} from "../../store/ChatsList/actions";

export const ChatList = () => {

    const chatsList = useSelector(state => state.chatsList);
    const dispatch = useDispatch();

    const delChatHandler = (e) => {
        const chatId = e.target.dataset.chatid;
        dispatch( delChat(chatId) );
    };

    return (
        <List>
            {
                Object.keys(chatsList).map((chatId, i) => (
                <ListItem key={chatId}>
                    <Link to={`/chats/${chatId}`} >
                        {chatsList[chatId].name}
                    </Link>
                    <Button data-chatid={chatId} onClick={delChatHandler}>del</Button>
                </ListItem>
            ))}
        </List>
    )
}

export default ChatList;