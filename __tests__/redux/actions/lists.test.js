import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS, REMOVE_LIST_REQUEST, REMOVE_LIST_SUCCESS, RENAME_LIST_REQUEST, RENAME_LIST_SUCCESS
} from '../../../src/redux/constants/list';
import {listsFromServer, tasksPerListFromServer21, tasksPerListFromServer20} from './../../../__mocks__/data/listData';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import {addListAction, getListsAction, removeListAction, renameListAction} from '../../../src/redux/actions/list';
import MockAdapter from 'axios-mock-adapter';
import taskConstants from '../../../src/redux/constants/task';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const initialState = {
    user: {
        user: {
            'access-token': 'ss',
            'client': 'ss',
            'uid': 'ss'
        }
    }
};

describe('async actions', () => {
    it('creates GET_LISTS_SUCCESS when fetching lists has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onGet('http://localhost:3000/v1/lists').reply(200, listsFromServer);
        mock.onGet('http://localhost:3000/v1/list_tasks/21').reply(200, tasksPerListFromServer21);
        mock.onGet('http://localhost:3000/v1/list_tasks/20').reply(200, tasksPerListFromServer20);
        const expectedActions = [
            {
                type: GET_LISTS_REQUEST,
                lists: undefined
            },
            {
                type: GET_LISTS_SUCCESS,
                lists: listsFromServer
            },
            {type: taskConstants.GET_TASKS_BY_LIST_ID_REQUEST, tasks: 20},
            {type: taskConstants.GET_TASKS_BY_LIST_ID_REQUEST, tasks: 21}
        ];
        const store = mockStore(initialState);
        return store.dispatch(getListsAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates ADD_LIST_SUCCESS when adding list has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPost('http://localhost:3000/v1/lists').reply(200, {id: 24, label: 'wwwwwwww'});
        const expectedActions = [
            {
                list: 'wwwwwwww',
                type: ADD_LIST_REQUEST},
            {
                list: {'id': 24, 'label': 'wwwwwwww'},
                type: ADD_LIST_SUCCESS},
            {
                listId: 24,
                type: 'SET_NEW_LIST'
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(addListAction('wwwwwwww')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates REMOVE_LIST_SUCCESS when removing list has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onDelete('http://localhost:3000/v1/lists/22').reply(200, {});
        const expectedActions = [
            {
                type: REMOVE_LIST_REQUEST,
                list: 22
            },
            {
                type: REMOVE_LIST_SUCCESS,
                list: 22
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(removeListAction(22)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates RENAME_LIST_SUCCESS when renaming list has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPut('http://localhost:3000/v1/lists/11').reply(200, {id: 11, label: 'eeeeeee'});
        const expectedActions = [
            {
                type: RENAME_LIST_REQUEST,
                list: 11
            },
            {
                type: RENAME_LIST_SUCCESS,
                list: {id: 11, label: 'eeeeeee'}
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(renameListAction(11, 'eeeeeee')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

