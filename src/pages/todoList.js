import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './../components/todo/listItem'
import ListCounter from './../components/todo/listCounter';

class TodoList extends Component {
    constructor(){
        super()
    }
    
    tripUpdateListItem(payload){
        this.props.updateListItem(payload)
    }

    render() {
        return (
            <div>
                <ListItem 
                    listItem={this.props.todo.listItem}
                    onTripUpdateListItem={this.tripUpdateListItem.bind(this)} 
                />

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
        updateListItem: (listItemIndex) => {
            dispatch({
                type: 'UPDATE_LIST_ITEM',
                payload: listItemIndex
            }) 
        },

        getDataCounter: () => {
            dispatch({
                type: 'GET_TODO_LIST_COUNTER'
            }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
