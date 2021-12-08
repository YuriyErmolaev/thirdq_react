import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {profileReducer} from "./Profile/reducer";
import {chatReducer} from "./ChatsList/reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    chatsList: chatReducer,
    profile: profileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
