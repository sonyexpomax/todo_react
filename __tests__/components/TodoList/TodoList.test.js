import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
import React from 'react';
import TodoListContainer from '../../../src/components/TodoList';

const props = {
    list: {
        id: 12,
        label: 'ewqqew'
    },
    tasks: [
        {id: 5},
        {id: 24}
    ],
    renameList: jest.fn(() => Promise.resolve('3')),
    removeList: jest.fn(() => Promise.resolve('3'))
};
let initialState = {
    tasks: {
        items: [
            {
                listId: 12,
                tasks: [
                    {id: 1},
                    {id: 2}
                ]
            }
        ]
    }
};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<TodoListContainer {...props}/>, store);
});

describe('Component TodoList', () => {
    it('should render List component', () => {
        expect(enzymeWrapper.find('h2').text()).toBe('List \'ewqqew\'');
    });
    it('should call removeList', () => {
        const removeButton = enzymeWrapper.find('#remove-btn');
        removeButton.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should show field for edit list name', () => {
        const renameButton = enzymeWrapper.find('#rename-btn');
        renameButton.simulate('click', { preventDefault: () => {} });
        expect(enzymeWrapper.find('#editable-field')).toHaveLength(1);
    });
    it('should call renameList', () => {
        const renameButton = enzymeWrapper.find('#rename-btn');
        renameButton.simulate('click', { preventDefault: () => {} });
        enzymeWrapper.find('#editable-field').simulate('change', {target: {value: 'aaaaaa'}});

        const setChangeName = enzymeWrapper.find('#setChangeName');
        setChangeName.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should render open list', () => {
        const openButton = enzymeWrapper.find('#open-close');
        openButton.simulate('click', { preventDefault: () => {} });
        expect(enzymeWrapper.find('#open-close').hasClass('td-todo-list-arrow-down'));
    });
    it('should render list with two tasks', () => {
        let TodoList = enzymeWrapper.find('TodoList');
        expect(TodoList.find('Task').length).toEqual(2);
    });
    it('should render empty list', () => {
        initialState = {
            tasks: {items: [{listId: 12, tasks: []}]}
        };
        store = mockStore(initialState);
        enzymeWrapper = mountWithStore(<TodoListContainer {...props}/>, store);
        expect(enzymeWrapper.find('.empty-list').text()).toBe('List is empty');
    });
});
