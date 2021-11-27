import {createStore} from "redux";
import {profileRedicer} from "./Profile/reducer";

export const store = createStore(
    profileRedicer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)