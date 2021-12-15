import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {useDispatch} from "react-redux";
import {addChat, addChatWithAddToDb} from "../../store/ChatsList/actions";
import { v4 as uuidv4 } from 'uuid';

export const ChatForm = () => {
    const dispatch = useDispatch();
    let chatName;
    const handleChange = (e) => {
        chatName = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( addChat( uuidv4(), chatName ) );
        dispatch( addChatWithAddToDb( uuidv4(), chatName ) );
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