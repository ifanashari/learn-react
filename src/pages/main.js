import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import "./assets/css/main.css"
import "./../assets/css/main.css"

import Home from './home'
import TodoList from './todoList'

import SideBar from './../components/common/sideBar'

export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <SideBar />
                    <div className="content--container">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>

                            <Route exact path="/todo">
                                <TodoList />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
