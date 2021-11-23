import React, { useEffect, useState, useRef } from "react";
import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';

export const MessageForm = ({ addNewMessage, chatExist }) => {

    const inputRef = useRef();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const uiid = uuidv4();
        addNewMessage({
            id: uiid,
            text: value,
            author: 'Yuriy'
        });
    }

    useEffect(() => {
        const tfInput = inputRef.current;
        if(tfInput) tfInput.focus();
    }, [inputRef.current]);

    if(!chatExist) return null;

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                inputRef={inputRef}
                value={value}
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