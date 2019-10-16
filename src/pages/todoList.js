import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(){
        super()
    }

    tripDoSomeThing(){
        this.props.tripMethod(true)
    }

    render() {
        return (
            <div>
                <button onClick={this.tripDoSomeThing.bind(this)}>Alpha</button>
                {this.props.todo.listItem[1].todoText}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todo: state.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        tripMethod: (payload) => {
            dispatch({
                type: 'DO_SOMETHING',
                payload: payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
