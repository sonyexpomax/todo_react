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
const addListSuccess = (listName) => { return { type: ADD_LIST_SUCCESS, listName } };
const renameListRequest = (list) => { return { type: RENAME_LIST_REQUEST, list } };
const renameListSuccess = (list) => { return { type: RENAME_LIST_SUCCESS, list } };
const removeListRequest = (list) => { return { type: REMOVE_LIST_REQUEST, list } };
const removeListSuccess = (list) => { return { type: REMOVE_LIST_SUCCESS, list } };
const findMaxListId = () => { return { type: FIND_MAX_LIST_ID } };
const increaseMaxListId = () => { return { type: INCREASE_MAX_LIST_ID } };

function getListsAction() {
    return dispatch => {
        dispatch(listRequest());
        getLists()
            .then(
                lists => {
                    dispatch(listSuccess(lists));
                    dispatch(findMaxListId());
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function addListAction(listName) {
    return dispatch => {
        dispatch(addListRequest(listName));
        addList(listName)
            .then(
                list => {
                    dispatch(increaseMaxListId());
                    dispatch(addListSuccess(listName));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function removeListAction(list) {
    return dispatch => {
        dispatch(removeListRequest(list));
        removeList(list)
            .then(
                list => {
                    console.info(list);
                    dispatch(removeListSuccess(list));
                },
                error => {
                    console.error(error);
                }
            );
    };
}

function renameListAction(listId, newName) {
    return dispatch => {
        dispatch(renameListRequest(listId));
        renameList(listId, newName)
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