import React from 'react';
import RegistrationPageButton from '../../../src/components/RegistrationPageButton';
import { shallow } from 'enzyme';

function setup () {
    const props = {
        signIg: jest.fn(),
        isRequest: false
    };

    const enzymeWrapper = shallow(<RegistrationPageButton {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Component RegistrationPageButton', () => {
    it('should render login button and find button', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('button').hasClass('td-registration-page-btn-wrap')).toBe(true);
    });
});
