import TodoList from '../../../src/components/TodoList/TodoList.jsx';
import Task from '../../../src/components/Task/Task.jsx';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Component TodoList', () => {
    const props = {
        tasks: [
            {
                id: 1,
                content: '1111111',
                position: 1,
                is_done: true,
                list_id: 1
            },
            {
                id: 2,
                content: '22222222222',
                position: 2,
                is_done: true,
                list_id: 1
            },
            {
                id: 3,
                content: '33333333',
                position: 3,
                is_done: false,
                list_id: 1
            },
        ],
        list: {
            id: 1,
            label: '66000000000',
            user_id: 1,
            created_at: '2018-05-02T12:34:13.904Z',
            updated_at: '2018-05-02T12:58:15.611Z'
        }
    };


    it('should render 3 Task components', () => {
        const wrapComponent = shallow(<TodoList {...props}/>);
        const component = wrapComponent.find('Task');
        console.log(wrapComponent);
        // const tasks = component.find(Task);
        expect(wrapComponent.children().length).toBe(3);
    });
    // it('should render Task in TodoList component', () => {
    //     const wrapper = mount(<TodoList {...props}/>);
    //     expect(wrapper.find(Task).type()).toBe(Task)
    // })


});
