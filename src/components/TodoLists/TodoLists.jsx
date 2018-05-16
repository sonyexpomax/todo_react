import './style.scss';
import React, { Component } from 'react';
import NewList from '../NewList';
import PropTypes from 'prop-types';
import TodoList from '../TodoList';
import { withRouter } from 'react-router-dom';

class TodoLists extends Component{

    componentDidMount () {
        this.props.getLists();
    }

    render () {
        return (
            <div className={'td-todo-lists-wrap'}>
                <h1>Lists</h1>
                {(this.props.lists.items)
                    ? this.props.lists.items.map((list, index) => (<TodoList key={list.id} list={list} position={index} />))
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

export default withRouter(TodoLists);
