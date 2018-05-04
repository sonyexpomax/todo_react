import {addTaskAction} from '../../redux/actions/tasks';
import { connect } from 'react-redux';
import NewTask from './NewTask';
import PropTypes from 'prop-types';
import React from 'react';

const NewTaskContainer = (props) => <NewTask {...props} />;

NewTaskContainer.propTypes = {
    listId: PropTypes.number,
    createTask: PropTypes.func
};

function mapDispatchToProps (dispatch) {
    return ({
        createTask: (content, listId) => dispatch(addTaskAction(content, listId))
    });
}

export default connect(null, mapDispatchToProps)(NewTaskContainer)