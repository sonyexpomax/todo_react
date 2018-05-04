import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import lists from '../../../src/redux/reducers/lists';
import {ADD_LIST_SUCCESS} from '../../../src/redux/constants/list';

describe('REDUCER --- Test list Reducers', () => {
    it('+++ reducer for ADD_INPUT', () => {
        let state = {output: 100};
        state = lists(state, { type: ADD_LIST_SUCCESS, output: 500 });
        expect(state).toEqual({output: 500});
    });
    // it('+++ reducer for SUBTRACT_INPUT', () => {
    //     let state = {output: 100};
    //     state = lists(state, {type: ADD_LIST_SUCCESS, output: 50 });
    //     expect(state).toEqual({ output: 50 });
    // });

});