import React, { useEffect, useState } from "react";
import {MessageForm} from "../MessageForm/MessageForm";
import { v4 as uuidv4 } from 'uuid';
import {Grid, List, ListItem} from '@mui/material';

export const Chats = () => {

    const [newmessage, setNewmessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const addMessageTolist = (message) => { // the callback
        setNewmessage( message );
        setMessageList([ ...messageList, message ]);
    };
    const chLUuids = [uuidv4(), uuidv4(), uuidv4()];
    const [chatsList] = useState([
        {id: chLUuids[0], name: 'First chat'},
        {id: chLUuids[1], name: 'Second chat'},
        {id: chLUuids[2], name: 'Third chat'}
    ]);

    const botName = 'Bot';

    useEffect(() => {
        if(newmessage && newmessage.author !== botName){
            const newBotMessageText = 'Thank you! Your message is accepted! )';
            const uiid = uuidv4();
            const newBotMessage = {
                id: uiid,
                author: botName,
                text: newBotMessageText
            };
            const addBotMessage = () => {
                setNewmessage( newBotMessage );
                setMessageList([ ...messageList, newBotMessage ]);
            }
            setTimeout(addBotMessage, 1500);
        }
    }, [newmessage]);

    return (
        <div className="App container">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <List>
                        {chatsList.map((chat, i) => (
                            <ListItem key={chat.id}>
                                <h5 className={'chatName'}>
                                    {chat.name}
                                </h5>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={8}>
                    <ul>
                        {messageList.map((message, i) => (
                            <li className={'messageItem'} key={message.id}>
                                <h5 className={'author'}>
                                    {message.author}:
                                </h5>
                                <p className={'text'}>
                                    {message.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <MessageForm
                        addMessageTolist={addMessageTolist}
                    />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chats;