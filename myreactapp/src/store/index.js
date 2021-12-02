import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile/reducer";
import {chatReducer} from "./ChatsList/reducer";

export const store = createStore(
    combineReducers({
        chatsList: chatReducer,
        profile: profileReducer
    }),

    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)