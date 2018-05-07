import { shallow } from 'enzyme';
import { Task } from './../../../src/components/Task/Task';

describe('Shallow Render + passing the {store} directly)', () => {
    const task = {
        id: 31,
        content: '00000',
        position: 1,
        is_done: null,
        list_id: 20,
        created_at: '2018-05-03T08:18:18.089Z',
        updated_at: '2018-05-03T11:48:39.627Z'
    };
    let component;

    beforeEach(() => {
        component = shallow(<Task props = {{task: task}}/>);
    });

    it('+++ render the connected component', () => {
        expect(component.length).toEqual(1);
    });

});
