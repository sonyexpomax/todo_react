import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
import NewListContainer from '../../../src/components/NewList';
import React from 'react';

const props = {
    addList: jest.fn((newList) => Promise.resolve(newList)),
    isRequest: false
};
const initialState = {};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<NewListContainer {...props}/>, store);
});

describe('Component NewList', () => {
    it('should render NewList', () => {
        expect(enzymeWrapper.find('h1').text()).toBe('Add new list');
    });
    it('should not call addList with empty label', () => {
        const button = enzymeWrapper.find('button');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should not call addList', () => {
        const button = enzymeWrapper.find('button');
        enzymeWrapper.find('#new-list').simulate('change', {target: {value: 'aaaaaa'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
