import React  from "react";
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(TodoListContainer)