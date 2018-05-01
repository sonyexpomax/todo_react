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
        const { dispatch } = this.props;
        if (newTask) {
            dispatch(addTaskAction(this.props.listId, newTask));
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

export default NewTask;


