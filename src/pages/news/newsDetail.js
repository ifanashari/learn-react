import React, { Component } from 'react'

export default class NewsDetail extends Component {
    render() {
        return (
            <div>
                this is news detail 
                {this.props.match.params.id}
                {/* {this.props.route.params.id} */}
            </div>
        )
    }
}
