import { CHANGE_AUTH_STATUS } from "./actions";

const initAUTH = {
    authorized: false
}

export const authReduser = (state = initAUTH, action) => {
    switch(action.type){
        case CHANGE_AUTH_STATUS:
            return {
                ...state,                
                authorized: action.payload                
            };
        default:
            return state
    }
}