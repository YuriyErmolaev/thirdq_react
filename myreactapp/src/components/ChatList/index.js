import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {List, ListItem} from "@mui/material";

export const ChatList = ({chatsList}) => {
    return (
        <List>
            {
                Object.keys(chatsList).map((chatId, i) => (
                <ListItem key={chatId}>
                    <Link to={`/chats/${chatId}`} >
                        {chatsList[chatId].name}
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default ChatList;