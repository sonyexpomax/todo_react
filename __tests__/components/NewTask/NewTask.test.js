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
        expect(enzymeWrapper.find('button').text()).toBe('Add');
    });
    it('should not call addList with empty label', () => {
        const button = enzymeWrapper.find('button');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should not call addList', () => {
        const button = enzymeWrapper.find('button');
        enzymeWrapper.find('#new-task').simulate('change', {target: {value: 'aaaaaa'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
