import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
import React from 'react';
import TaskContainer from '../../../src/components/Task';

const props = {
    task: {
        id: 2,
        content: 'das',
        is_done: false
    },
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
        enzymeWrapper.setProps({
            task: {
                id: 2,
                content: 'das',
                is_done: true
            }
        });
        expect(enzymeWrapper.hasClass('td-task-finished'));
    });
    it('should render fist Task', () => {
        enzymeWrapper.setProps({isFirst: true});
        expect( enzymeWrapper.find('#up-button').hasClass('td-task-arrow-non-active'));
    });
    it('should render last Task', () => {
        enzymeWrapper.setProps({isLast: true});
        expect( enzymeWrapper.find('#down-button').hasClass('td-task-arrow-non-active'));
    });
    it('should change state of task', () => {
        const stateButton = enzymeWrapper.find('#change-state');
        stateButton.simulate('change', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    // it('should move task upper', () => {
    //     const upButton = enzymeWrapper.find('#down-button');
    //     console.log(upButton.first());
    //     upButton.first().simulate('click', { preventDefault: () => {} });
    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    // });
    // it('should move task lower', () => {
    //     const downButton = enzymeWrapper.find('#down-button');
    //     downButton.simulate('click', { preventDefault: () => {} });
    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    // });
    // it('should remove task from list', () => {
    //     const removeButton = enzymeWrapper.find('svg');
    //     console.log(removeButton);
    //     removeButton.simulate('click', { preventDefault: () => {} });
    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    // });
});
