import React, { useState } from "react";

export const MessageForm = ({ addMessageTolist }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addMessageTolist({
            text: value,
            author: 'Yuriy'
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} name='message' />
            <button className={'button-84'} type={"submit"}>Add message</button>
        </form>
    )
}