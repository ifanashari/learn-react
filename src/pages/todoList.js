import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './../components/todo/listItem'

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
                
                {
                    this.props.todo.listItem.map((data, index) => {
                        return(
                            <ListItem key={index} item={data} />
                        )
                    })
                }
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
