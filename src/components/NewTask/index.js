import React from "react";
import NewTask from './Newtask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';
import {addTaskAction} from "../../redux/actions/tasks";

const propTypes = {
//
};

const NewTaskContainer = (props) => <NewTask {...props} />;

NewTaskContainer.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
    return ({
        createTask: (content, listId) =>  dispatch(addTaskAction(content, listId))
    });
}

export default connect(null, mapDispatchToProps)(NewTaskContainer)