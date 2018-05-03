import {
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS,
    ADD_LIST_SUCCESS,
    ADD_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_REQUEST,
    REMOVE_LIST_SUCCESS,
    REMOVE_LIST_REQUEST,
} from '../constants/list';

import {getLists,addList,renameList,removeList} from '../api/lists';
import {getTasksByListIdAction, setNewListAction} from '../actions/tasks'

const listRequest = (lists) => { return { type: GET_LISTS_REQUEST, lists } };
const listSuccess = (lists) => { return { type: GET_LISTS_SUCCESS, lists } };
const addListRequest = (list) => { return { type: ADD_LIST_REQUEST, list } };
const addListSuccess = (list) => { return { type: ADD_LIST_SUCCESS, list } };
const renameListRequest = (list) => { return { type: RENAME_LIST_REQUEST, list } };
const renameListSuccess = (list) => { return { type: RENAME_LIST_SUCCESS, list } };
const removeListRequest = (list) => { return { type: REMOVE_LIST_REQUEST, list } };
const removeListSuccess = (list) => { return { type: REMOVE_LIST_SUCCESS, list } };

function getListsAction() {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(listRequest());
        getLists(token,client,uid)
            .then(
                lists => {
                    dispatch(listSuccess(lists));
                    return lists;
                },
                error => {
                    console.error(error);
                }
            )
            .then(
                lists => {
                    lists.forEach(list => {
                        dispatch(getTasksByListIdAction(list.id));
                    });
                }
            );
    };
}

function addListAction(list) {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(addListRequest(list));
        addList(token,client,uid, list)
            .then(
                list => {
                    dispatch(addListSuccess(list));
                    return list
                },
                error => {
                    console.error(error);
                }
            )
            .then(
                list => {
                    dispatch(setNewListAction(list.id));
                }
        );
    };
}

function removeListAction(listId) {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(removeListRequest(listId));
        removeList(token,client,uid, listId)
            .then(
                response => {
                    dispatch(removeListSuccess(listId));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function renameListAction(listId, newName) {
    return (dispatch, getState) => {

        const token = getState().user.user['access-token'];
        const client = getState().user.user['client'];
        const uid = getState().user.user['uid'];

        dispatch(renameListRequest(listId));
        renameList(token,client,uid, listId, newName)
            .then(
                list => {
                    dispatch(renameListSuccess(list));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

export {getListsAction, addListAction, removeListAction,renameListAction};