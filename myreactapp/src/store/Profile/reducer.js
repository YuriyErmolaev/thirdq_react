import {TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    checkbox: false,
    name: 'InitState',
};

export const profileRedicer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox
            };
        default:
            return state;
    }
};