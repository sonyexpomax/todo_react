import { connect } from 'react-redux';
import {getListsAction} from '../../redux/actions/list';
import PropTypes from 'prop-types';
import React from 'react';
import TodoLists from './TodoLists';

const TodoListsContainer = (props) => <TodoLists {...props} />;

TodoListsContainer.propTypes = {
    lists: PropTypes.object,
    getLists: PropTypes.func
};

function mapStateToProps (store) {
    return {
        lists: store.lists
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        getLists: () => dispatch(getListsAction())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListsContainer);
