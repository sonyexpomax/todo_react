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
        expect(enzymeWrapper.hasClass('td-new-list-wrap'));
    });
    it('should not call addList with empty label', () => {
        const button = enzymeWrapper.find('.td-new-list-add-btn');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should call addList', () => {
        const button = enzymeWrapper.find('.td-new-list-add-btn');
        enzymeWrapper.find('#new-list').simulate('change', {target: {value: 'aaaaaa'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
    it('should call onCancel', () => {
        const button = enzymeWrapper.find('.td-new-list-cancel-btn');
        enzymeWrapper.find('#new-list').simulate('change', {target: {value: 'aaaaaa'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(enzymeWrapper.find('#new-list').length).toBe(1);
    });
    it('should call onFocus', () => {
        const input = enzymeWrapper.find('#new-list');
        input.simulate('click', { preventDefault: () => {} });
        expect(enzymeWrapper.find('.td-new-list-add-btn').hasClass('td-registration-page-btn-wrap'));

    });

});
