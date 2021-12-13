import { onChangeAuth } from "../../services/firebase";

export const CHANGE_AUTH_STATUS = 'AUTH::CHANGE_STATUS';
export const GET_AUTH_STATUS = 'AUTH::GET_STATUS';

export const changeAuthStatus = (status) => ({
    type: CHANGE_AUTH_STATUS,
    payload: status
});

export const UpdateAuthStatus = () => (dispatch) => {
    onChangeAuth((user)=>{
        if (user) {
            dispatch(changeAuthStatus(true));
        } else {
            dispatch(changeAuthStatus(false));
        }        
    });
}
