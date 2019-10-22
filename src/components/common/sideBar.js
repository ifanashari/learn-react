import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    render() {
        return (
            <div className="side_bar">
                <div className="side_bar--container">
                    <Link to="/">Home</Link>
                    <Link to="/todo">Todo List here</Link>
                </div>
            </div>
        )
    }
}
