import React, { Component } from "react";

import './style.css';

class NewTask extends Component{

    addTask = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.refs.taskInput.value);
        this.refs.taskInput.value = '';
    };

    render(){
        return (
            <div>
                <h3>Add new task</h3>
                <form onSubmit={this.addTask} className={'add-form'}>
                    <input ref='taskInput' placeholder="input task name" className={'add-text'} />
                    <button type="submit" className={'add-button'}>Add</button>
                </form>
            </div>
        );
    }
}
export default NewTask;