import { shallow } from 'enzyme';
import React from 'react';
import TodoLists from '../../../src/components/TodoLists/TodoLists';

function setup () {
    const props = {
        lists: {
            items: [
                {id: 21},
                {id: 23}
            ]
        },

        getLists: jest.fn(() => Promise.resolve('3')),
        getTasks: jest.fn(() => Promise.resolve('3'))
    };

    const enzymeWrapper = shallow(<TodoLists {...props} />);

    return {
        props,
        enzymeWrapper
    };
}
const { enzymeWrapper } = setup();

describe('Component TodoList', () => {
    it('should render TodoLists component', () => {
        expect(enzymeWrapper.find('h1').text()).toBe('Task lists');
    });
    it('should render TodoLists component without lists', () => {
        enzymeWrapper.setProps({lists: {}});
        expect(enzymeWrapper.find('p').text()).toBe('No lists');
    });
});
