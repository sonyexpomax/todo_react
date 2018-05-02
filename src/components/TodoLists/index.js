import TodoLists from './TodoLists';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    lists: PropTypes.object,
};

const TodoListsContainer = (props) => <TodoLists {...props} />;

TodoListsContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        lists: store.lists
    };
}

export default connect(mapStateToProps)(TodoListsContainer)