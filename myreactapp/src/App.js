import './App.css';
import './styles/App.sass';
import {CircularProgress} from '@mui/material';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { RoutesComponent } from './components/RoutesComponent';

function App() {
    return(        
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <RoutesComponent />
            </PersistGate>
        </Provider>        
    )
}

export default App;
