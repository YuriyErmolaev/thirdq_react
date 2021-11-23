import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const NoChat = ({chatExist}) => {
    if(chatExist) return null;
    return (
        <div className="wrapper">
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Please, check exist chat!</Alert>
            </Stack>
        </div>
    );
}

export default NoChat;