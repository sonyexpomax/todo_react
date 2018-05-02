import taskConstants from '../constants/task';

import {addTask, removeTask, getTasks, changeTaskState, showFinishedTasks, showAllTasks} from '../api/tasks';
import {addList, getLists, renameList} from "../api/lists";

const getTaskRequest = (tasks) => { return { type: taskConstants.GET_TASKS_REQUEST, tasks } };
const getTaskSuccess = (tasks) => { return { type: taskConstants.GET_TASKS_SUCCESS, tasks } };

const addTaskRequest = (task) => { return { type: taskConstants.ADD_TASK_REQUEST, task } };
const addTaskSuccess = (task) => { return { type: taskConstants.ADD_TASK_SUCCESS, task } };

const removeTaskRequest = (task) => { return { type: taskConstants.REMOVE_TASK_REQUEST, task } };
const removeTaskSuccess = (task) => { return { type: taskConstants.REMOVE_TASK_SUCCESS, task } };

const changeTaskStateRequest = (task) => { return { type: taskConstants.CHANGE_TASK_STATE_REQUEST, task } };
const changeTaskStateSuccess = (task) => { return { type: taskConstants.CHANGE_TASK_STATE_SUCCESS, task } };

const showAllTasksRequest = () => { return { type: taskConstants.SHOW_ALL_REQUEST } };
const showAllTasksSuccess = () => { return { type: taskConstants.SHOW_ALL_SUCCESS } };

const showFinishedTasksRequest = () => { return { type: taskConstants.SHOW_FINISHED_REQUEST } };
const showFinishedTasksSuccess = () => { return { type: taskConstants.SHOW_FINISHED_SUCCESS } };

const findMaxTaskId = () => { return { type: taskConstants.FIND_MAX_TASK_ID } };
const increaseMaxTaskId = () => { return { type: taskConstants.INCREASE_MAX_TASK_ID } };


function getTasksAction() {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(getTaskRequest());
        getTasks(token,client,uid)
            .then(
                tasks => {
                    console.log(tasks);
                    dispatch(getTaskSuccess(tasks));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function addTaskAction(content, listId) {
    console.log(content,listId);
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(addTaskRequest(listId));
        addTask(token,client,uid, content, listId)
            .then(
                task => {
                    console.log(task);
                    // dispatch(addTaskSuccess(content, listId));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function changeTaskStateAction(taskId) {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(changeTaskStateRequest(taskId));
        changeTaskState(token, client, uid, taskId)
            .then(
                response => {
                    console.log(response);
                    dispatch(changeTaskStateSuccess(response));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function removeTaskAction(taskId) {
    return dispatch => {
        dispatch(removeTaskRequest(taskId));
        removeTask(taskId)
            .then(
                res => {
                    dispatch(removeTaskSuccess(taskId));
                },
                error => {
                    console.error(error);
                }
            );
    };
}



function moveTaskAbove() {
    
}

function moveTaskLower() {
    
}

function showAllTasksAction() {
    return dispatch => {
        dispatch(showAllTasksRequest());
        showAllTasks()
            .then(
                response => {
                    dispatch(showAllTasksSuccess());
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function showFinishedTasksAction() {
    return dispatch => {
        dispatch(showFinishedTasksRequest());
        showFinishedTasks()
            .then(
                response => {
                    dispatch(showFinishedTasksSuccess());
                },
                error => {
                    console.error(error);
                }
            );
    };
}

export {getTasksAction, addTaskAction, removeTaskAction, changeTaskStateAction, moveTaskAbove, moveTaskLower, showAllTasksAction, showFinishedTasksAction};