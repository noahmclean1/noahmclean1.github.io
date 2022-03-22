import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Game } from './game.jsx';
import { Home } from "./home.jsx"
import { Resume } from "./resume.jsx"


class Main extends Component {
    render() {
        return (
            <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/resume' component={Resume}></Route>
            <Route exact path='/game' component={Game}></Route>
            <Route exact path='/' component={Home}></Route>
            </Switch>
        );
    }
}

export default Main;