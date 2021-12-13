import { CHANGE_AUTH_STATUS } from "./actions";

const initAUTH = {
    authorised: false
}

export const authReduser = (state = initAUTH, action) => {
    switch(action.type){
        case CHANGE_AUTH_STATUS:
            return {
                ...state,                
                authorised: action.payload                
            };
        default:
            return state
    }
}