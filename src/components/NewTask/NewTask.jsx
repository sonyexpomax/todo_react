import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTask: '',
            isAdding: false
        };
    }

    onChangeName = (e) => {
        this.setState({newTask: e.target.value});
    };

    onFocusText = () => {
        this.setState({
            isAdding: true,
            newTask: 'New task',
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { newTask } = this.state;
        if (newTask) {
            this.props.createTask(newTask, this.props.listId);
        }
        this.setState({
            newTask: '',
            isAdding: false
        });
    };

    onCancel = (e) => {
        e.preventDefault();
        this.setState({
            newTask: '',
            isAdding: false
        });
    };

    render () {
        return (
            <form>
                <div className='td-new-task-wrap'>
                        <input
                            id='new-task'
                            onChange={this.onChangeName}
                            onClick={this.onFocusText}
                            placeholder="Add new task in this list"
                            className='td-new-task-add-text'
                            value={this.state.newTask}
                        />
                </div>
                <div className={this.state.isAdding ? 'td-new-task-btn td-new-task-visible-btn' : 'td-new-task-btn'}>
                    <button type="submit" className='td-new-task-add-btn' onClick={this.onSubmit}>Add task</button>
                    <button type="submit" className='td-new-task-cancel-btn' onClick={this.onCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}

NewTask.propTypes = {
    listId: PropTypes.number,
    createTask: PropTypes.func
};

export default NewTask;
