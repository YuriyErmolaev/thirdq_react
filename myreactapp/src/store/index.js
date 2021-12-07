import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {profileReducer} from "./Profile/reducer";
import {chatReducer} from "./ChatsList/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        chatsList: chatReducer,
        profile: profileReducer
    }),    
    composeEnhancers(applyMiddleware(thunk))
)