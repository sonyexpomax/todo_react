import {
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS,
    ADD_LIST_SUCCESS,
    ADD_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_REQUEST,
    REMOVE_LIST_SUCCESS,
    REMOVE_LIST_REQUEST,
    FIND_MAX_LIST_ID,
    INCREASE_MAX_LIST_ID
} from '../constants/list';

import {getLists,addList,renameList,removeList} from '../api/lists';

const listRequest = (lists) => { return { type: GET_LISTS_REQUEST, lists } };
const listSuccess = (lists) => { return { type: GET_LISTS_SUCCESS, lists } };
const addListRequest = (list) => { return { type: ADD_LIST_REQUEST, list } };
const addListSuccess = (list) => { return { type: ADD_LIST_SUCCESS, list } };
const renameListRequest = (list) => { return { type: RENAME_LIST_REQUEST, list } };
const renameListSuccess = (list) => { return { type: RENAME_LIST_SUCCESS, list } };
const removeListRequest = (list) => { return { type: REMOVE_LIST_REQUEST, list } };
const removeListSuccess = (list) => { return { type: REMOVE_LIST_SUCCESS, list } };
const findMaxListId = () => { return { type: FIND_MAX_LIST_ID } };
const increaseMaxListId = () => { return { type: INCREASE_MAX_LIST_ID } };

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
                },
                error => {
                    console.error(error);
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
                },
                error => {
                    console.error(error);
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
                    console.info(list);
                    dispatch(renameListSuccess(list));
                },
                error => {
                    console.error(error);
                }
            );
    };
}


export {getListsAction, addListAction, removeListAction,renameListAction};