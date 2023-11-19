import React, { Component } from 'react'

export default class Todo extends Component {

    render() {
        return (
            
            // 'completed' class for completed todos
            <div id={this.props.id}  className='todo' style={{ display: 'flex' }}>
                {this.props.completed} ? <li className="todo-item completed">{this.props.todoTitle}</li>:
                 <li className="todo-item ">{this.props.todoTitle}</li>
                

                <button onClick={this.props.edit} className="check-btn">
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button onClick={this.props.trash} className="trash-btn">
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}