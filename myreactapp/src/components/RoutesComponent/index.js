import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import {MenuItem} from '@mui/material';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Profile from "../Profile"
import Home from "../Home";
import { ApiList } from '../ApiList';
import {Signup} from '../Signup';
import { Login } from '../Login';
import Chats from "../Chats";
import { useEffect, useState } from 'react';
import { onChangeAuth } from '../../services/firebase';
import PublicRoute from '../../hocs/PublicRoute';
import PrivateRoute from '../../hocs/PrivateRoute';
import {getAuthStatus} from '../../store/Auth/selectors';
import {useSelector} from "react-redux";


export const RoutesComponent = () => {

    const authorised = useSelector(getAuthStatus);

    return (        
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
                    <Route                                 
                        path={"/chats"} 
                        element={<Chats />} 
                    />
                    <Route path="/chats/:chatId" element={<Chats />} />
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/apilist"} element={<ApiList />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/login"} element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RoutesComponent;