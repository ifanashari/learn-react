import React, { Component } from 'react'

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
                            <div key={index}>
                                <input
                                    type="checkbox" 
                                    onChange={this.updateListStatus.bind(this, index)} 
                                />
                                
                                <span style={data.status === true ? {textDecoration: 'line-through'} : {}}>
                                    {data.todoText} 
                                </span>

                                <span>
                                    : status {data.status === true ? 'Done' : 'Not Done'}
                                </span>

                                <button onClick={this.removeTodo.bind(this, index)}>
                                    x
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
