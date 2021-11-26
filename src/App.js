import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Post from "./component/Post/Post";
import './App.css';
import './component/Comment/styles/base.css';
import './component/Comment/styles/comment-app.css';
import TopBar from "./component/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "src/pages/settings/Settings.jsx";
import Single from "src/pages/single/Single.jsx";
import Write from "src/pages/write/Write.js ";


import Registiration from "./component/Login/Registiration";
import LoginForm from "./component/Login/LoginForm";
// import { useHistory } from "react-router-dom";
// import history from './history';

const App = () => {
    return (
        <Router  >
            <TopBar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/register" component={Registiration} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
        </Router>
    );
};

export default App;
