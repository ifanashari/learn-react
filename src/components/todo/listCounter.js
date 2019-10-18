import React, { Component } from 'react'

export default class ListCounter extends Component {
    render() {
        return (
            <div>
                <div>
                    Done: {this.props.dataCounter.done}
                </div>

                <div>
                    Not Done: {this.props.dataCounter.notDone}
                </div>
            </div>
        )
    }
}
