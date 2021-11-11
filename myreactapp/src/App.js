import './App.css';
import './styles/App.sass';
import React, { useEffect, useState } from "react";
import {MessageForm} from "./components/MessageForm/MessageForm";

function App() {

    const [newmessage, setNewmessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const addMessageTolist = (message) => { // the callback
        setNewmessage( message );
        setMessageList([ ...messageList, message ]);
    };
    const botName = 'Bot';

    useEffect(() => {
        if(newmessage && newmessage.author !== botName){
            const newBotMessageText = 'Thank you! Your message is accepted! )';
            const newBotMessage = {
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
        <div className="App">
            <header className="App-header">
                <ul>
                    {messageList.map((message, i) => (
                        <li className={'messageItem'} key={i}>
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
            </header>
        </div>
    );


}

export default App;
