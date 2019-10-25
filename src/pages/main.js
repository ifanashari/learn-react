import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import "./../assets/css/main.css"

import Home from './home'
import TodoList from './todoList'
import NewsDetail from './news/newsDetail'
import NewsList from './news/newsList'
import MainNews from './news/mainNews'

import SideBar from './../components/common/sideBar'

export default class Main extends Component {
    render() {
        return (
            <BrowserRouter history={this.props.history}>
                <div className="content">
                    <SideBar />
                    <div className="content--container">
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route exact path="/todo" component={TodoList} />

                            <Route exact path="/news-list" component={MainNews} />

                            <Route exact path="/news-list/news/:id" component={NewsDetail} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
