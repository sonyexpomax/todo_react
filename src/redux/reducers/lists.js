import {
    GET_LISTS_SUCCESS,
    GET_LISTS_REQUEST,
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    REMOVE_LIST_REQUEST,
    REMOVE_LIST_SUCCESS,
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
} from '../constants/list';

const initialState = {
    items: [],
    isFetching: false,
    maxListId: 0
};

let newState;

export default function lists (state = initialState, action) {
    switch (action.type) {
    case GET_LISTS_REQUEST:
        return {...state, isFetching: true,};
    case GET_LISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            items: action.lists
        };
    case ADD_LIST_REQUEST:
        return {...state, isFetching: true};
    case ADD_LIST_SUCCESS:
        return {
            ...state,
            items: [...state.items, action.list],
            isFetching: false
        };
    case REMOVE_LIST_REQUEST:
        return {...state, isFetching: true};
    case REMOVE_LIST_SUCCESS:
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.list),
            isFetching: false
        };
    case RENAME_LIST_REQUEST:
        return {...state, isFetching: true};
    case RENAME_LIST_SUCCESS:
        newState = state.items.map((item) => {
            if (item.id === action.list.id) {
                item.label = action.list.label;
            }
            return item;
        });
        return {
            ...state,
            items: newState,
            isFetching: false
        };
    default:
        return state;
    }
}
