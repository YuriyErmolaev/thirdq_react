import React, { useEffect, useState } from "react";
import {MessageForm} from "../MessageForm/MessageForm";
import { v4 as uuidv4 } from 'uuid';
import {Grid, List, ListItem} from '@mui/material';
import ChatList from "../ChatList";
import MessageList from "../MessageList";
import {useParams} from "react-router-dom";
import NoChat from "../NoChat";

export const Chats = () => {

    const [newmessage, setNewmessage] = useState('');

    const addMessageToChatList = (message) => {
        setChatsList({
            ...chatsList,
            [chatId]: {
                ...chatsList[chatId],
                messages: [ ...chatsList[chatId].messages, message ]
            }
        });
    }

    const addNewMessage = (message) => { // the callback
        setNewmessage(message);
        addMessageToChatList(message);
    };

    const [chatsList, setChatsList] = useState({
        chat1: {
            name: 'First chat',
            messages: [
                {id: 'm11', author: 'Yuriy', text: 'Hello!'},
                {id: 'm12', author: 'Bot', text: 'Hi!'},
            ]
        },
        chat2: {
            name: 'Second chat',
            messages: [
                {id: 'm21', author: 'Petr', text: 'Hi!'},
                {id: 'm22', author: 'Bot', text: 'Good day!'},
            ]
        }
    });
    
    const botName = 'Bot';

    useEffect(() => {
        console.log('newmessage2', newmessage);
        if(newmessage && newmessage.author !== botName){
            const newBotMessageText = 'Thank you! Your message is accepted! )';
            const uiid = uuidv4();
            const newBotMessage = {
                id: uiid,
                author: botName,
                text: newBotMessageText
            };
            setNewmessage( newBotMessage );
            const addBotMessage = () => {
                addMessageToChatList(newBotMessage);
            }
            setTimeout(addBotMessage, 1500);
        }
    }, [newmessage]);

    const { chatId } = useParams();

    return (
        <div className="wrapper">
            <h1>Chats{chatsList[chatId] ? '/'+chatsList[chatId].name : ''}</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ChatList
                        chatsList={chatsList}
                        chatId={chatId}
                    />
                </Grid>
                <Grid item xs={8}>
                    <MessageList
                        messageList={chatsList[chatId] ? chatsList[chatId].messages : ''}
                    />
                    <MessageForm
                        addNewMessage={addNewMessage}
                        chatExist={chatsList[chatId] ? true : false}
                    />
                    <NoChat chatExist={chatsList[chatId] ? true : false} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Chats;