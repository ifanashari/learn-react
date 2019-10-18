import React, { Component } from 'react'

export default class ListForm extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: '',
            otherTest: ''
        }
    }

    updateNewTodo(event){
        this.setState({
            newTodo: event.target.value
        })
    }

    addTodo(){
        this.props.onTripAddTodo(this.state.newTodo)
    }

    render() {
        return (
            <div style={{margin: '20px 0'}}>
                <h1>{this.state.newTodo}</h1>
                
                <input type="text" onChange={this.updateNewTodo.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add</button>
            </div>
        )
    }
}
