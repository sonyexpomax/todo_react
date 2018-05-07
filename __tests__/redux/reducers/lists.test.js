import {
    threeLists,
    twoLists,
    noLists,
    noListsWithFetching,
    twoListsWithOneRenamed
} from '../../../__mocks__/data/listData';
import {
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS,
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    REMOVE_LIST_REQUEST,
    REMOVE_LIST_SUCCESS,
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS
} from '../../../src/redux/constants/list';
import {default as listsReducer} from '../../../src/redux/reducers/lists';

describe('REDUCER --- Test Reducers for lists', () => {
    it('+++ reducer for ADD_LIST_REQUEST', () => {
        expect(listsReducer(noLists, { type: ADD_LIST_REQUEST })).toEqual(noListsWithFetching);
    });
    it('+++ reducer for ADD_LIST_SUCCESS', () => {
        const list = {
            id: 24,
            label: '444444'
        };
        expect(listsReducer(twoLists, { type: ADD_LIST_SUCCESS, list })).toEqual(threeLists);
    });
    it('+++ reducer for REMOVE_LIST_REQUEST', () => {
        expect(listsReducer(noLists, { type: REMOVE_LIST_REQUEST })).toEqual(noListsWithFetching);
    });
    it('+++ reducer for REMOVE_LIST_SUCCESS', () => {
        const list = 24;
        expect(listsReducer(threeLists, { type: REMOVE_LIST_SUCCESS, list })).toEqual(twoLists);
    });
    it('+++ reducer for RENAME_LIST_REQUEST', () => {
        expect(listsReducer(noLists, { type: RENAME_LIST_REQUEST })).toEqual(noListsWithFetching);
    });
    it('+++ reducer for RENAME_LIST_SUCCESS', () => {
        const list = {
            id: 23,
            label: '88888888'
        };
        expect(listsReducer(twoLists, { type: RENAME_LIST_SUCCESS, list })).toEqual(twoListsWithOneRenamed);
    });
    it('+++ reducer for GET_LISTS_REQUEST', () => {
        expect(listsReducer(noLists, { type: GET_LISTS_REQUEST })).toEqual(noListsWithFetching);
    });
    it('+++ reducer for GET_LISTS_SUCCESS', () => {
        const lists = [
            {
                id: 22,
                label: '2222222'
            },
            {
                id: 23,
                label: '88888888'
            }
        ];
        expect(listsReducer(noLists, { type: GET_LISTS_SUCCESS, lists })).toEqual(twoLists);
    });
    it('+++ reducer for non-existent action type', () => {
        expect(listsReducer(twoLists, { type: 'SOME_ACTION_TYPE' })).toEqual(twoLists);
    });
    it('+++ reducer for default initial state', () => {
        expect(listsReducer(undefined, { type: 'SOME_ACTION_TYPE' })).toEqual(noLists);
    });
});
