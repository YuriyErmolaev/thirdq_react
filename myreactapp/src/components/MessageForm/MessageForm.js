import React, { useEffect, useState, useRef } from "react";
import {Input, TextField} from '@mui/material';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';

export const MessageForm = ({ addMessageTolist }) => {
    const tfRef = useRef();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const uiid = uuidv4();
        addMessageTolist({
            id: uiid,
            text: value,
            author: 'Yuriy'
        });
    }

    useEffect(() => {
        const tf = tfRef.current,
            input = tf.getElementsByTagName('input')[0];
        input.focus();
    }, [tfRef.current]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                ref={tfRef}
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