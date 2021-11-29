import React, { useEffect, useState, useRef } from "react";
import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import {addChat} from "../../store/ChatsList/actions";

export const ChatForm = () => {

    const dispatch = useDispatch();
    let chatName;

    const handleChange = (e) => {
        chatName = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat(chatName));
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                onChange={handleChange}
                name='name'
                placeholder={'new chat name'}
            />
            <LoadingButton
                className={'button-84'}
                type={"submit"}
            >
                Add new chat
            </LoadingButton>

        </form>
    )
}

export default ChatForm;