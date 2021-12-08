import React from "react";
import {Link} from "react-router-dom";
import {List, ListItem, Button} from "@mui/material";

export const ChatListV = ({chatsList, delChatHandler }) => {
    
    return (
        <List>
            {
                Object.keys(chatsList).map((chatId, i) => (
                <ListItem key={chatId}>
                    <Link to={`/chats/${chatId}`} >
                        {chatsList[chatId].name}
                    </Link>                    
                    <Button data-chatid={chatId} onClick={(e) => delChatHandler(e)}>del</Button>
                </ListItem>
            ))}
        </List>
    )
}

export default ChatListV;