import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
import NewTaskContainer from '../../../src/components/NewTask';
import React from 'react';

const props = {
    createTask: jest.fn((newList) => Promise.resolve(newList)),
    listId: 23
};
const initialState = {};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<NewTaskContainer {...props}/>, store);
});

describe('Component NewTask', () => {
    it('should render NewTask', () => {
        expect(enzymeWrapper.hasClass('td-new-task-wrap'));
    });
    it('should not call addList with empty label', () => {
        enzymeWrapper.find('#new-task').simulate('change', {target: {value: 'aaaaaa'}});
        const button = enzymeWrapper.find('.td-new-task-add-btn');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should  call addList', () => {
        const button = enzymeWrapper.find('.td-new-task-add-btn');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should onCancel', () => {
        const button = enzymeWrapper.find('.td-new-task-cancel-btn');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should call onFocus', () => {
        const input = enzymeWrapper.find('#new-task');
        input.simulate('click', { preventDefault: () => {} });
        expect(enzymeWrapper.find('.td-new-task-btn').hasClass('td-new-task-visible-btn'));

    });
});
