import React, { useEffect, useState } from "react";
import {MessageForm} from "../MessageForm/MessageForm";
import { v4 as uuidv4 } from 'uuid';
import {Grid, List, ListItem} from '@mui/material';
import ChatList from "../ChatList";
import MessageList from "../MessageList";
import {useParams} from "react-router-dom";
import NoChat from "../NoChat";
import {useSelector} from "react-redux";
import ChatForm from "../ChatForm";

export const Chats = () => {

    const chatsList = useSelector(state => state.chatsList);
    const botName = 'Bot';

    // useEffect(() => {
    //     console.log('newmessage2', newmessage);
    //     if(newmessage && newmessage.author !== botName){
    //         const newBotMessageText = 'Thank you! Your message is accepted! )';
    //         const uiid = uuidv4();
    //         const newBotMessage = {
    //             id: uiid,
    //             author: botName,
    //             text: newBotMessageText
    //         };
    //         setNewmessage( newBotMessage );
    //         const addBotMessage = () => {
    //             addMessageToChatList(newBotMessage);
    //         }
    //         setTimeout(addBotMessage, 1500);
    //     }
    // }, [newmessage]);

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