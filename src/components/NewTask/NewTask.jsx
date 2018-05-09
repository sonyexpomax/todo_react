import './style.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTask: ''
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

    render () {
        return (
            <div className='td-new-task-wrap'>
                <form className='td-new-task-add-form'>
                    <input
                        id='new-task'
                        onChange={this.onChangeName}
                        placeholder="Add new task in this list"
                        className='td-new-task-add-text'
                        value={this.state.newTask}
                    />
                    <button type="submit" className='td-new-task-add-btn' onClick={this.onSubmit}>Add</button>
                </form>
            </div>
        );
    }
}

NewTask.propTypes = {
    listId: PropTypes.number,
    createTask: PropTypes.func
};

export default NewTask;
