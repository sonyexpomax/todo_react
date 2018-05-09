import LoginPageButton from '../../../src/components/LoginPageButton';
import React from 'react';
import { shallow } from 'enzyme';

function setup () {
    const props = {
        signIg: jest.fn(),
        isRequest: false
    };

    const enzymeWrapper = shallow(<LoginPageButton {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('LoginPageButton', () => {
        it('should render login button and find button', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('button').hasClass('td-login-page-btn-wrap')).toBe(true);
        });
    });
});
