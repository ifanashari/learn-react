import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">Todo List here</Link></li>
                </ul>
            </div>
        )
    }
}
