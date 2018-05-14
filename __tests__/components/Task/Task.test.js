import configureStore from 'redux-mock-store';
import {mountWithStore, shallowWithStore} from '../../shallowWrapper';
import React from 'react';
import TaskContainer from '../../../src/components/Task';

const props = {
    task: {id: 2, content: 'das', is_done: false},
    isFirst: false,
    isLast: false,
    moveTaskDown: jest.fn(() => Promise.resolve('3')),
    moveTaskUp: jest.fn(() => Promise.resolve('3')),
    removeTask: jest.fn(() => Promise.resolve('3')),
    changeTaskState: jest.fn(() => Promise.resolve('3'))
};
const initialState = {};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
});

describe('Component Task', () => {
    it('should render not finished Task', () => {
        expect(enzymeWrapper.hasClass('td-task-wrap'));
    });
    it('should render finished Task', () => {
        let props = {task: {id: 2, content: 'das', is_done: true}, isFirst: true, isLast: true};
        enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
        expect(enzymeWrapper.hasClass('td-task-finished'));
    });
    it('should render just one task', () => {
         let props = {task: {id: 2, content: 'das', is_done: false}, isFirst: true, isLast: true};
        enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
        expect( enzymeWrapper.hasClass('td-task-arrow-non-active'));
    });
    it('should render last Task', () => {
        enzymeWrapper.setProps({isLast: true});
        let downButton = enzymeWrapper.find('#down-button').first();
        expect( downButton.hasClass('td-task-arrow-non-active'));
    });
    it('should change state of task', () => {
        const stateButton = enzymeWrapper.find('#change-state');
        stateButton.simulate('change', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should not move task upper', () => {
        let props = {task: {id: 2, content: 'das', is_done: true}, isFirst: true, isLast: true};
        enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
        const upButton = enzymeWrapper.find('#up-button-icon').at(1);
         upButton.simulate('click', { preventDefault: () => {} });
         expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should move task upper', () => {
        let props = {task: {id: 2, content: 'das', is_done: true}, isFirst: false, isLast: true};
        enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
        const upButton = enzymeWrapper.find('#up-button-icon').at(1);
        upButton.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should move task lower', () => {
        let props = {task: {id: 2, content: 'das', is_done: true}, isFirst: false, isLast: false};
        enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
        const downButton = enzymeWrapper.find('#down-button-icon').at(1);
        downButton.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should not move task lower', () => {
        let props = {task: {id: 2, content: 'das', is_done: true}, isFirst: false, isLast: true};
        enzymeWrapper = mountWithStore(<TaskContainer {...props}/>, store);
        const downButton = enzymeWrapper.find('#down-button-icon').at(1);
        downButton.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should remove task from list', () => {
        const removeButton = enzymeWrapper.find('#remove-task-icon').at(1);
        console.log(removeButton);
        removeButton.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
