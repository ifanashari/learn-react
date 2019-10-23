import React, { Component } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import NewsList from './newsList'

export default class MainNews extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <Switch>
                <Route exact path={`${this.props.match.path}/`} component={NewsList} />
                {/* <Route exact path={`${this.props.match.path}/`} component={NewsList} /> */}
            </Switch>
        )
    }
}
