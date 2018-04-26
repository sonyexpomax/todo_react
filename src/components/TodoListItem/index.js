import React, { Component } from "react";

import './style.css';

class TodoListItem extends Component{

    changeHandler = (e) => {
        this.props.onChange(this.props.task.id);
    };

    removeHandler = (e) => {
        e.preventDefault();
        this.props.onRemove(this.props.task.id);
    };

    render(){
        return (
            <div className={'task'}>
                <p>{this.props.task.name}</p>
                <small>{this.props.task.date}</small>
                <input
                    type = "checkbox"
                    onClick = {this.changeHandler}
                    defaultChecked = {this.props.task.isDone}
                />
                <button
                    className = {'task-remove'}
                    title = {'Remove'}
                    ref = {this.props.task.id}
                    onClick = {this.removeHandler}
                >x</button>
            </div>
        )
    }
}

export default TodoListItem;