import './App.css';
import './styles/App.sass';
import React, { useState } from "react";
import {MessageForm} from "./components/MessageForm/MessageForm";

function App() {

    const [messageList, setMessageList] = useState([]);
    const addMessageTolist = (message) => { // the callback
        setMessageList([ ...messageList, message ]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {messageList.map((message, i) => (
                        <li key={i}>
                            {message.text}
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
