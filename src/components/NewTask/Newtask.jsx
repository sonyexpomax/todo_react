import React, { Component } from "react";
import PropTypes from 'prop-types';
import './style.css';

class NewTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            newTask: '',
        };
    }

    onChangeName = (e) => {
        this.setState({newTask: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { newTask } = this.state;
        if (newTask) {
            this.props.createTask(newTask, this.props.listId);
        }
        this.setState({newTask: ''});
    };

    render(){
        return (
            <div className='td-new-task-wrap'>
                <form onSubmit={this.onSubmit} className='td-new-task-add-form'>
                    <input onChange={this.onChangeName} placeholder="Add new task in this list" className='td-new-task-add-text' value={this.state.newTask}/>
                    <button type="submit" className='td-new-task-add-btn'>Add</button>
                </form>
            </div>
        );
    }
}

NewTask.propTypes = {
    listId: PropTypes.number,
    createTask: PropTypes.func,
};

export default NewTask;


