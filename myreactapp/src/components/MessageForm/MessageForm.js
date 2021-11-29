import React, { useEffect, useState, useRef } from "react";
import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import {addChat, addMessage} from "../../store/ChatsList/actions";

export const MessageForm = ({ chatExist, chatId }) => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    let messageInput;

    const handleChange = (e) => {
        messageInput = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const uiid = uuidv4();
        const message = {
                id: uiid,
                text: messageInput,
                author: 'Yuriy'
            };
        dispatch(addMessage(chatId, message));
    }

    useEffect(() => {
        const tfInput = inputRef.current;
        if(tfInput){
            tfInput.focus();
        }
    }, [inputRef.current]);

    if(!chatExist) return null;

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                inputRef={inputRef}
                value={messageInput}
                onChange={handleChange}
                name='message'
            />
            <LoadingButton
                className={'button-84'}
                type={"submit"}
            >
                Add message
            </LoadingButton>

        </form>
    )
}