import React from "react";

export const MessageList = ({messageList}) => {

    if(!messageList) return null;

    return (
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
    )
}
export default MessageList;