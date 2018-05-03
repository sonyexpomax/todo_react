import TodoLists from './TodoLists';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getListsAction} from "../../redux/actions/list";
import {getTasksAction} from "../../redux/actions/tasks";

const TodoListsContainer = (props) => <TodoLists {...props} />;

TodoListsContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        lists: store.lists
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        getLists: () =>  dispatch(getListsAction()),
        getTasks: () =>  dispatch(getTasksAction()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListsContainer)