import { Task } from './../../../src/components/Task/Task';
import { shallow } from 'enzyme'

describe('Shallow Render + passing the {store} directly)', () => {
    const initialState = { output:100 };
    const mockStore = configureStore();
    let store,container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<Task store={store} /> );
    });

    it('+++ render the connected(SMART) component', () => {
        expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(container.prop('output')).toEqual(initialState.output);
    });