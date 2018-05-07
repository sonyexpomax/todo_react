import * as actions from '../../../src/redux/actions/list';
import {
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS
} from '../../../src/redux/constants/list';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import thunk from 'redux-thunk';
import {
    listsFromServer
} from './../../../__mocks__/data/listData';
import { lists } from ',./../../__mocks__/redux/api/lists';

const mockStore = configureMockStore([thunk]);
jest.mock('../../../__mocks__/redux/api/lists', () => { return Promise.resolve([]) });

describe('async api', () => {
    it('should return one company (success)', () => {
        const store = mockStore({
            user: {
                user: {
                    'access-token': 22,
                    uid: 33,
                    client: 44
                },
                lists: {
                    items: [],
                    isFetching: false
                }
            }
        });
        const expectedActions = [
            { type: GET_LISTS_REQUEST },
            { type: GET_LISTS_SUCCESS, listsFromServer}
        ];
        return store.dispatch(actions.getListsAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
