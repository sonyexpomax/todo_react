import React, { Component } from "react";
import { addTaskAction } from '../../redux/actions/tasks';
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
    };

    render(){
        return (
            <div className={'new-task'}>
                <form onSubmit={this.onSubmit} className={'add-form'}>
                    <input onChange={this.onChangeName} placeholder="Add new task in this list" className={'add-task-text'} />
                    <button type="submit" className={'add-task-btn'}>Add</button>
                </form>
            </div>
        );
    }
}

NewTask.propTypes = {
    listId: PropTypes.number,
    createTask: PropTypes.function,
};

export default NewTask;


