import './App.css';
import './styles/App.sass';
import React, { useEffect, useState } from "react";
import Chats from "./components/Chats";
import {Grid, List, ListItem, MenuItem} from '@mui/material';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Profile from "./components/Profile"
import Home from "./components/Home";

function App() {
    return(
        <BrowserRouter>
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
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
