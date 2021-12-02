import React, { useEffect, useState } from "react";
import {MessageForm} from "../MessageForm/MessageForm";
import { v4 as uuidv4 } from 'uuid';
import {Grid, List, ListItem} from '@mui/material';
import ChatList from "../ChatList";
import MessageList from "../MessageList";
import {useParams} from "react-router-dom";
import NoChat from "../NoChat";
import {shallowEqual, useSelector} from "react-redux";
import ChatForm from "../ChatForm";
import {getChatList} from "../../store/ChatsList/selectors";

export const Chats = () => {

    const chatsList = useSelector(getChatList, shallowEqual);
    const { chatId } = useParams();

    return (
        <div className="wrapper">
            <h1>Chats{chatsList[chatId] ? '/'+chatsList[chatId].name : ''}</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ChatList/>
                    <ChatForm />
                </Grid>
                <Grid item xs={8}>
                    <MessageList
                        messageList={chatsList[chatId] ? chatsList[chatId].messages : ''}
                    />
                    <MessageForm
                        chatExist={chatsList[chatId] ? true : false}
                        chatId={chatId}
                    />
                    <NoChat chatExist={chatsList[chatId] ? true : false} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Chats;