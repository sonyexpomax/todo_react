import React  from "react";
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {renameListAction,removeListAction} from "../../redux/actions/list";

const propTypes = {
    list: PropTypes.object,
};

const TodoListContainer = (props) => <TodoList {...props} />;

TodoListContainer.propTypes = propTypes;

function mapStateToProps(store, ownProps) {
    return {
        tasks: store.tasks.items.filter(item => item.list_id === ownProps.list.id)
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        renameList: (listId, name) =>  dispatch(renameListAction(listId, name)),
        removeList: (listId) =>  dispatch(removeListAction(listId)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)