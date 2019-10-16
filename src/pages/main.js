import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

import Home from './home'
import TodoList from './todoList'

import Navbar from './../components/navigation/navbar'

export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/todo">
                        <TodoList />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
