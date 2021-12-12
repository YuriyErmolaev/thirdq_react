import './App.css';
import './styles/App.sass';
import Chats from "./components/Chats";
import {CircularProgress, MenuItem} from '@mui/material';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Profile from "./components/Profile"
import Home from "./components/Home";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { ApiList } from './components/ApiList';
import {Signup} from './components/Signup';
import { Login } from './components/Login';

function App() {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<CircularProgress />}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <div className="container">
                                <Toolbar>
                                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                                        <MenuItem>Home</MenuItem>
                                    </Link>
                                    <Link to={"/chats"} style={{ textDecoration: 'none' }}>
                                        <MenuItem>Chats</MenuItem>
                                    </Link>
                                    <Link to={"/profile"} style={{ textDecoration: 'none' }}>
                                        <MenuItem>Profile</MenuItem>
                                    </Link>
                                    <Link to={"/apilist"} style={{ textDecoration: 'none' }}>
                                        <MenuItem>ApiList</MenuItem>
                                    </Link>
                                    <Link to={"/signup"} style={{ textDecoration: 'none' }}>
                                        <MenuItem>Signup</MenuItem>
                                    </Link>
                                    <Link to={"/login"} style={{ textDecoration: 'none' }}>
                                        <MenuItem>Login</MenuItem>
                                    </Link>
                                </Toolbar>
                            </div>
                        </AppBar>
                    </Box>
                    <div className="App container">
                        <Routes>
                            <Route path={"/"} element={<Home />} />
                            <Route path={"/chats"} element={<Chats />} />
                            <Route path="/chats/:chatId" element={<Chats />} />
                            <Route path={"/profile"} element={<Profile />} />
                            <Route path={"/apilist"} element={<ApiList />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/login"} element={<Login />} />
                        </Routes>
                    </div>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
