import React, { Component } from 'react'
import classNames from 'classnames'

export default class ListItem extends Component {

    updateListStatus(index){
        this.props.onTripUpdateListItem(index)
    }

    removeTodo(index){
        this.props.onTripRemoveTodo(index)
    }

    render() {
        return (
            <div>
                {
                    this.props.listItem.map((data, index) => {
                        return (
                            <div className={
                                classNames(
                                    'todo--item', 
                                    (data.status === true ? 'todo--item--done' : 'todo--item--not_done')
                                )}  
                                key={index}>
                                
                                <div className="todo--item--body">
                                    <span>{data.todoText}</span>
                                </div>
                                
                                <div className="todo--item--control">
                                    <button className="mx--auto" onClick={this.removeTodo.bind(this, index)}>
                                        Remove  
                                    </button>

                                    <button className="spacer--y mx--auto" onClick={this.updateListStatus.bind(this, index)}>
                                        {data.status === true ? 'cancel' : 'do it'}
                                    </button>

                                    <div className={
                                        classNames(
                                            data.status === true ? 'todo--item--control--status--done' : 'todo--item--control--status--not_done',
                                            'todo--item--control--status'
                                        )
                                    }>
                                        {data.status === true ? 'done' : 'not done'}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
