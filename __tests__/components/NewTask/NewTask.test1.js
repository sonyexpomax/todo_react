import NewTask from "../../../src/components/NewTask/NewTask.jsx";
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Component NewTask', () => {
    const props = {
      listId: 1
    };
    it('start render component', () => {
        const component = shallow(<NewTask {...props}/>);
        expect(component).toMatchSnapshot();
    });


    it('click add task with empty input field', () => {
        const component = shallow(<NewTask {...props}/>);
        const text = component.find('input').text();
        expect(text).toEqual('');
    });
});


// import React from 'react';
// import NewTask from "../../../src/components/NewTask/NewTask";
// import renderer from 'react-test-renderer';
//
// test('Link changes the class when hovered', () => {
//
//     const props = {
//         listId: 1
//     };
//
//     const component = renderer.create(
//         <NewTask {...props}/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     // // manually trigger the callback
//     // tree.props.onChangeName();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
//     //
//     // // manually trigger the callback
//     // tree.props.onSubmit();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
// });