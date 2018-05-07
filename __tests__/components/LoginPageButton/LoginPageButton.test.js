import { LoginPageButton } from './../../../src/components/LoginPageButton/';
import { shallow } from 'enzyme'

describe('Shallow Render LoginPageButton', () => {
    let wrapper;
    const props = {
        isRequest: false,
        signIg: ()=>{}
    };

    beforeEach (() => {
        wrapper = shallow(<LoginPageButton {...props}/>)

    });

    it('Render the LoginPageButton component', () => {
        expect(wrapper.length).toEqual(1)
    });


});