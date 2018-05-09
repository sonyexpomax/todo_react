import './style.css';
import React, { Component } from 'react';
import NewTask from '../NewTask';
import PropTypes from 'prop-types';
import Task from '../Task';

class TodoList extends Component{

    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
            isEditable: false,
            name: this.props.list.label
        };
    }

    onChangeState = (e) => {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    };

    onEdit = (e) => {
        e.preventDefault();
        this.setState({isEditable: !this.state.isEditable});
    };

    setChangeName = (e) => {
        e.preventDefault();
        this.props.renameList(this.props.list.id, this.state.name);
        this.setState({isEditable: !this.state.isEditable});
    };

    onChangeName = (e) => {
        this.setState({name: e.target.value});
    };

    onRemove = (e) => {
        e.preventDefault();
        this.props.removeList(this.props.list.id);
    };

    render () {
        let headText = !this.state.isEditable
            ? (<h2>List '{this.props.list.label}'</h2>)
            : (<input id='editable-field' type='text' value={this.state.name} onChange={this.onChangeName}/>);
        let tasks = this.props.tasks.length > 0
            ? (<ol>
                {this.props.tasks.map((item, index) => {
                    let isFirst = (index === 0);
                    let isLast = (index === (this.props.tasks.length - 1));
                    return (
                        <li key={item.id}>
                            <Task task={item} isFirst={isFirst} isLast={isLast} />
                        </li>
                    );
                })}
            </ol>)
            : (<p className={'empty-list'}>List is empty</p>);

        return (
            <div className='td-todo-list-wrap'>
                <div className='td-todo-list-head'>
                    <div className='td-todo-list-head-text'>
                        <i
                            id='open-close'
                            onClick={this.onChangeState}
                            className = {!this.state.isOpen ? 'td-todo-list-arrow-right' : 'td-todo-list-arrow-down' }
                        />
                        {headText}
                        <button
                            id='setChangeName'
                            onClick={this.setChangeName}
                            className='td-todo-list-head-text'
                            style={{display: this.state.isEditable ? 'inline-block' : 'none' }}>
                            Save
                        </button>
                    </div>
                    <div className='td-todo-list-head-actions'>
                        <small id='remove-btn' className='td-todo-list-remove' onClick={this.onRemove}>delete</small>
                        <small id='rename-btn' className='td-todo-list-rename' onClick={this.onEdit}>rename</small>
                    </div>
                </div>
                <div style={{display: this.state.isOpen ? 'block' : 'none' }}>
                    {tasks}
                    <NewTask listId = {this.props.list.id}/>
                </div>
                <hr className={'list-line'}/>
            </div>
        );
    }
}

TodoList.propTypes = {
    list: PropTypes.object,
    tasks: PropTypes.array,
    renameList: PropTypes.func,
    removeList: PropTypes.func
};

export default TodoList;
