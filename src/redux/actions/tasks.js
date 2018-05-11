import taskConstants from '../constants/task';

import {addTask, removeTask, getTasksByListId, changeTaskState, moveTaskUp, moveTaskDown} from '../api/tasks';

// const getTaskRequest = (tasks) => { return { type: taskConstants.GET_TASKS_REQUEST, tasks } };
// const getTaskSuccess = (tasks) => { return { type: taskConstants.GET_TASKS_SUCCESS, tasks } };

export const getTasksByListIdRequest = (tasks) => { return { type: taskConstants.GET_TASKS_BY_LIST_ID_REQUEST, tasks } };
export const getTasksByListIdSuccess = (tasks) => { return { type: taskConstants.GET_TASKS_BY_LIST_ID_SUCCESS, tasks } };

const addTaskRequest = (task) => { return { type: taskConstants.ADD_TASK_REQUEST, task } };
const addTaskSuccess = (task) => { return { type: taskConstants.ADD_TASK_SUCCESS, task } };

const removeTaskRequest = (task) => { return { type: taskConstants.REMOVE_TASK_REQUEST, task } };
const removeTaskSuccess = (task) => { return { type: taskConstants.REMOVE_TASK_SUCCESS, task } };

const changeTaskStateRequest = (task) => { return { type: taskConstants.CHANGE_TASK_STATE_REQUEST, task } };
const changeTaskStateSuccess = (task) => { return { type: taskConstants.CHANGE_TASK_STATE_SUCCESS, task } };

const checkForFinishList = (task) => { return { type: taskConstants.CHECK_FOR_FINISH_LIST, task } };

const moveTaskUpRequest = (task) => { return { type: taskConstants.MOVE_TASK_UP_REQUEST,task } };
const moveTaskUpSuccess = (tasks) => { return { type: taskConstants.MOVE_TASK_UP_SUCCESS,tasks } };

const moveTaskDownRequest = (task) => { return { type: taskConstants.MOVE_TASK_DOWN_REQUEST,task}};
const moveTaskDownSuccess = (tasks) => { return { type: taskConstants.MOVE_TASK_DOWN_SUCCESS,tasks}};

const setNewList = (listId) => { return { type: taskConstants.SET_NEW_LIST, listId } };

// function getTasksAction () {
//     return (dispatch, getState) => {
//         const token = getState().user.user['access-token'];
//         const client = getState().user.user['client'];
//         const uid = getState().user.user['uid'];
//
//         dispatch(getTaskRequest());
//         getTasks(token, client, uid)
//             .then(
//                 tasks => {
//                     dispatch(getTaskSuccess(tasks));
//                 },
//                 error => {
//                     console.error(error);
//                 }
//             );
//     };
// }

function getTasksByListIdAction (listId) {
    return (dispatch, getState) => {
        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(getTasksByListIdRequest(listId));
        getTasksByListId(token, client, uid, listId)
            .then(
                tasks => {
                    dispatch(getTasksByListIdSuccess({ items: tasks, listId: listId}));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function addTaskAction (content, listId) {
    return (dispatch, getState) => {
        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(addTaskRequest(listId));
        return addTask(token, client, uid, content, listId)
            .then(
                task => {
                    dispatch(addTaskSuccess(task));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function changeTaskStateAction (taskId) {
    return (dispatch, getState) => {
        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(changeTaskStateRequest(taskId));
        return changeTaskState(token, client, uid, taskId)
            .then(
                response => {
                    dispatch(changeTaskStateSuccess(response));
                    dispatch(checkForFinishList(response));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function removeTaskAction (taskId) {
    return (dispatch, getState) => {
        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(removeTaskRequest(taskId));
        return removeTask(token, client, uid, taskId)
            .then(
                response => {
                    dispatch(removeTaskSuccess(response));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function moveUpTaskAction (taskId) {
    return (dispatch, getState) => {
        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(moveTaskUpRequest(taskId));
        return moveTaskUp(token, client, uid, taskId)
            .then(
                tasks => {
                    dispatch(moveTaskUpSuccess(tasks));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function moveDownTaskAction (taskId) {
    return (dispatch, getState) => {
        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(moveTaskDownRequest(taskId));
        return moveTaskDown(token, client, uid, taskId)
            .then(
                tasks => {
                    dispatch(moveTaskDownSuccess(tasks));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function setNewListAction (listId) {
    return (dispatch) => {
        dispatch(setNewList(listId));
    };
}

export {getTasksByListIdAction, addTaskAction, removeTaskAction, changeTaskStateAction, moveDownTaskAction, moveUpTaskAction, setNewListAction};
