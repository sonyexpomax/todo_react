import './style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import NewList from '../NewList';
import PropTypes from 'prop-types';
import TodoList from '../TodoList';

class TodoLists extends Component{

    componentDidMount () {
        this.props.getLists();
    }

    render () {
        return (
            <div className={'td-todo-lists-wrap'}>
                <Link to='/login'>
                    <LogoutButton />
                </Link>
                <h1>Task lists</h1>
                {(this.props.lists.items)
                    ? this.props.lists.items.map(list => (<TodoList key={list.id} list={list} />))
                    : <p>No lists</p>
                }
                <NewList/>
            </div>
        );
    }
}

TodoLists.propTypes = {
    lists: PropTypes.object,
    getLists: PropTypes.func,
    getTasks: PropTypes.func
};

export default TodoLists;
