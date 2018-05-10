import './style.scss';
import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import NewTask from '../NewTask';
import PropTypes from 'prop-types';
import Task from '../Task';
import ModalWindow from '../ModalWindow';

class TodoList extends Component{

    constructor (props) {
        super(props);
        this.state = {
            isOpen: this.props.position === 0,
            isEditable: false,
            name: this.props.list.label,
            isRemoving: false
        };
    }

    onChangeState = (e) => {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    };

    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            isEditable: !this.state.isEditable,
            isOpen: false
        });
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
        this.setState({isRemoving: true});
    };

    handleRemove = (isSubmit) => {
        if(isSubmit) {
            this.props.removeList(this.props.list.id);
        }
        this.setState({isRemoving: false});
    };

    onCancel = (e) =>{
        e.preventDefault();
        this.setState({
            isEditable: false
        });
    };

    render () {
        let head = (<h2>List '{this.props.list.label}'</h2>);
        let content = !this.state.isEditable
            ? (
                <div className={this.state.isOpen ? 'td-todo-list-head-open' : 'td-todo-list-head-close' }>
                    <div className='td-todo-list-head-text'>
                        <i
                            id='open-close'
                            onClick={this.onChangeState}
                            className = {!this.state.isOpen ? 'td-todo-list-arrow-right' : 'td-todo-list-arrow-down' }
                        />
                        {head}
                    </div>
                    <div className='td-todo-list-head-actions'>
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            size='xs'
                            className = 'td-todo-list-icon'
                            onClick={this.onRemove}
                        />
                        <FontAwesomeIcon
                            icon={faPencilAlt}
                            size='xs'
                            className = 'td-todo-list-icon'
                            onClick={this.onEdit}
                        />
                    </div>
                </div>
            )
            : (
                <div className='td-todo-list-head-close td-todo-list-selected'>
                    <input id='editable-field' type='text' value={this.state.name} onChange={this.onChangeName}/>
                </div>
            );
        let tasks = this.props.tasks.length > 0
            ? (<div className='td-todo-list-list'>
                {this.props.tasks.map((item, index) => {
                    let isFirst = (index === 0);
                    let isLast = (index === (this.props.tasks.length - 1));
                    return (
                        <div className='td-todo-list-item' key={item.id}>
                            <Task task={item} isFirst={isFirst} isLast={isLast} />
                        </div>
                    );
                })}
            </div>)
            : (<p className={'empty-list'}>List is empty</p>);

        return (
            <div className='td-todo-list-wrap'>

                <ModalWindow handleClick={this.handleRemove}/>
                {content}
                <div style={{display: this.state.isOpen ? 'block' : 'none' }}>
                    {tasks}
                    <NewTask listId = {this.props.list.id}/>
                </div>
                <button
                    type="submit"
                    className={this.state.isEditable ? 'td-todo-list-add-btn td-todo-list-visible-btn' : 'td-todo-list-add-btn'}
                    onClick={this.setChangeName}>
                    Save
                </button>
                <button
                    className={this.state.isEditable ? 'td-todo-list-cancel-btn td-todo-list-visible-btn' : 'td-todo-list-cancel-btn'}
                    onClick={this.onCancel}>
                    Cancel
                </button>

            </div>
        );
    }
}

TodoList.propTypes = {
    position: PropTypes.number,
    list: PropTypes.object,
    tasks: PropTypes.array,
    renameList: PropTypes.func,
    removeList: PropTypes.func
};

export default TodoList;
