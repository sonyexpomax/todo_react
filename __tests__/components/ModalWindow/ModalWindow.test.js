import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
import React from 'react';
import ModalWindowContainer from '../../../src/components/ModalWindow';

const props = {
    listName: 'dasgj',
    handleClick: jest.fn()
};
const initialState = {};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<ModalWindowContainer {...props}/>, store);
});

describe('Component ModalWindow', () => {
    it('should render Modal window', () => {
        expect(enzymeWrapper.hasClass('td-modal-wrap'));
    });

    it('should change state of task', () => {
        enzymeWrapper.setState({isShown:true});
        const okButton = enzymeWrapper.find('.td-modal-ok');
        okButton.simulate('click', { preventDefault: () => {} });
        expect(enzymeWrapper.props().children.props.handleClick.mock.calls.length).toEqual(1);
    });

});
