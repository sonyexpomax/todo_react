import taskConstants from '../constants/task';

import {addTask, removeTask, getTasks, changeTaskState, moveTaskUp, moveTaskDown} from '../api/tasks';

const getTaskRequest = (tasks) => { return { type: taskConstants.GET_TASKS_REQUEST, tasks } };
const getTaskSuccess = (tasks) => { return { type: taskConstants.GET_TASKS_SUCCESS, tasks } };

const addTaskRequest = (task) => { return { type: taskConstants.ADD_TASK_REQUEST, task } };
const addTaskSuccess = (task) => { return { type: taskConstants.ADD_TASK_SUCCESS, task } };

const removeTaskRequest = (task) => { return { type: taskConstants.REMOVE_TASK_REQUEST, task } };
const removeTaskSuccess = (task) => { return { type: taskConstants.REMOVE_TASK_SUCCESS, task } };

const changeTaskStateRequest = (task) => { return { type: taskConstants.CHANGE_TASK_STATE_REQUEST, task } };
const changeTaskStateSuccess = (task) => { return { type: taskConstants.CHANGE_TASK_STATE_SUCCESS, task } };

const moveTaskUpRequest = (task) => { return { type: taskConstants.MOVE_TASK_UP_REQUEST,task } };
const moveTaskUpSuccess = (task) => { return { type: taskConstants.MOVE_TASK_UP_SUCCESS,task } };

const moveTaskDownRequest = (task) => { return { type: taskConstants.MOVE_TASK_DOWN_REQUEST,task}};
const moveTaskDownSuccess = (task) => { return { type: taskConstants.MOVE_TASK_DOWN_SUCCESS,task}};

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
                    dispatch(addTaskSuccess(task));
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
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(removeTaskRequest(taskId));
        removeTask(token, client, uid, taskId)
            .then(
                response => {
                    dispatch(removeTaskSuccess(taskId));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function moveUpTaskAction(taskId) {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(moveTaskUpRequest(taskId));
        moveTaskUp(token, client, uid, taskId)
            .then(
                response => {
                    dispatch(moveTaskUpSuccess(response));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function moveDownTaskAction(taskId) {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(moveTaskDownRequest(taskId));
        moveTaskDown(token, client, uid, taskId)
            .then(
                response => {
                    dispatch(moveTaskDownSuccess(response));
                },
                error => {
                    console.error(error);
                }
            );
    };
}


export {getTasksAction, addTaskAction, removeTaskAction, changeTaskStateAction, moveDownTaskAction, moveUpTaskAction};