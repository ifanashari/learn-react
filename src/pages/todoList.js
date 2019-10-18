import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './../components/todo/listItem'
import ListCounter from './../components/todo/listCounter';
import ListForm from './../components/todo/listForm';

class TodoList extends Component {
    constructor(){
        super()
    }
    
    tripUpdateListItem(payload){
        this.props.updateListItem(payload)
    }

    tripAddTodo(payload){
        this.props.addTodo(payload)
    }

    tripRemoveTodo(payload){
        this.props.removeTodo(payload)
    }

    render() {
        return (
            <div>
                <ListItem 
                    listItem={this.props.todo.listItem}
                    onTripUpdateListItem={this.tripUpdateListItem.bind(this)} 
                    onTripRemoveTodo={this.tripRemoveTodo.bind(this)}
                />

                <ListForm onTripAddTodo={this.tripAddTodo.bind(this)} />

                <ListCounter 
                    dataCounter={{
                        done: this.props.todo.done,
                        notDone: this.props.todo.notDone,
                    }}
                />
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
    return {
        updateListItem: (payload) => {
            dispatch({
                type: 'UPDATE_LIST_ITEM',
                payload: payload
            }) 
        },

        getDataCounter: () => {
            dispatch({
                type: 'GET_TODO_LIST_COUNTER'
            }) 
        },

        addTodo: (payload) => {
            dispatch({
                type: 'ADD_TODO',
                payload: payload
            }) 
        },

        removeTodo: (payload) => {
            dispatch({
                type: 'REMOVE_TODO',
                payload: payload
            }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
