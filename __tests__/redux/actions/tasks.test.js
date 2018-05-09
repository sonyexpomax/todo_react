import {
    addTaskAction,
    removeTaskAction,
    moveDownTaskAction,
    moveUpTaskAction,
    changeTaskStateAction
} from '../../../src/redux/actions/tasks';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
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
    it('creates ADD_TASK_SUCCESS when adding task has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPost('http://localhost:3000/v1/tasks').reply(200, {content: 'content', list_id: 10});
        const expectedActions = [
            {
                task: 10,
                type: taskConstants.ADD_TASK_REQUEST},
            {
                task: {'list_id': 10, content: 'content'},
                type: taskConstants.ADD_TASK_SUCCESS}
        ];
        const store = mockStore(initialState);
        return store.dispatch(addTaskAction('content', 10)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates REMOVE_TASK_SUCCESS when removing task has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onDelete('http://localhost:3000/v1/tasks/4').reply(200, {});
        const expectedActions = [
            {
                type: taskConstants.REMOVE_TASK_REQUEST,
                task: 4
            },
            {
                type: taskConstants.REMOVE_TASK_SUCCESS,
                task: {}
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(removeTaskAction(4)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates MOVE_TASK_UP_SUCCESS when moving task has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPatch('http://localhost:3000/v1/tasks/11/up').reply(200, [{id: 11, position: 1}, {id: 33, position: 2}]);
        const expectedActions = [
            {
                type: taskConstants.MOVE_TASK_UP_REQUEST,
                task: 11
            },
            {
                type: taskConstants.MOVE_TASK_UP_SUCCESS,
                tasks: [{id: 11, position: 1}, {id: 33, position: 2}]
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(moveUpTaskAction(11)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates MOVE_TASK_DOWN_SUCCESS when moving task has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPatch('http://localhost:3000/v1/tasks/33/down').reply(200, [{id: 11, position: 1}, {id: 33, position: 2}]);
        const expectedActions = [
            {
                type: taskConstants.MOVE_TASK_DOWN_REQUEST,
                task: 33
            },
            {
                type: taskConstants.MOVE_TASK_DOWN_SUCCESS,
                tasks: [{id: 11, position: 1}, {id: 33, position: 2}]
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(moveDownTaskAction(33)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates CHANGE_TASK_STATE_SUCCESS when changing task state has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPut('http://localhost:3000/v1/tasks/4').reply(200, {id: 4, is_done: true});
        const expectedActions = [
            {
                type: taskConstants.CHANGE_TASK_STATE_REQUEST,
                task: 4
            },
            {
                type: taskConstants.CHANGE_TASK_STATE_SUCCESS,
                task: {id: 4, is_done: true}
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(changeTaskStateAction(4)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates CHANGE_TASK_STATE_SUCCESS when changing task state has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPut('http://localhost:3000/v1/tasks/4').reply(200, {id: 4, is_done: true});
        const expectedActions = [
            {
                type: taskConstants.CHANGE_TASK_STATE_REQUEST,
                task: 4
            },
            {
                type: taskConstants.CHANGE_TASK_STATE_SUCCESS,
                task: {id: 4, is_done: true}
            }
        ];
        const store = mockStore(initialState);
        return store.dispatch(changeTaskStateAction(4)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
