import './App.css';
import './styles/App.sass';
import React, { useEffect, useState } from "react";
import Chats from "./components/Chats";
import {Grid, List, ListItem} from '@mui/material';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function App() {
    return(
        <BrowserRouter>
            <List>
                <ListItem>
                    <Link to={"/Chats"}>Chats</Link>
                </ListItem>
            </List>
            <Routes>
                <Route path={"/"} element={<Chats />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
