import {renameListAction, removeListAction} from '../../redux/actions/list';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import TodoList from './TodoList';

const TodoListContainer = (props) => <TodoList {...props} />;

TodoListContainer.propTypes = {
    position: PropTypes.number,
    list: PropTypes.object,
    tasks: PropTypes.array,
    renameList: PropTypes.func,
    removeList: PropTypes.func,
    isFinished: PropTypes.bool
};

function mapStateToProps (store, ownProps) {
    let tasksTemp = store.tasks.items.filter(item => item.listId === ownProps.list.id);
    return {
        tasks: tasksTemp[0] ? tasksTemp[0].tasks : [],
        isFinished: tasksTemp[0] ? tasksTemp[0].isFinished : false
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        renameList: (listId, name) => dispatch(renameListAction(listId, name)),
        removeList: (listId) => dispatch(removeListAction(listId))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
