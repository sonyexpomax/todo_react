import React from "react";
import NewTask from './Newtask';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import {addTaskAction} from "../../redux/actions/tasks";

const NewTaskContainer = (props) => <NewTask {...props} />;

NewTaskContainer.propTypes = {
    listId: PropTypes.number,
    createTask: PropTypes.func,
};

function mapDispatchToProps (dispatch) {
    return ({
        createTask: (content, listId) =>  dispatch(addTaskAction(content, listId))
    });
}

export default connect(null, mapDispatchToProps)(NewTaskContainer)