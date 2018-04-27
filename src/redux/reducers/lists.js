import {
    GET_LISTS_SUCCESS,
    GET_LISTS_REQUEST,
    ADD_LIST,
    CHANGE_NAME,
    REMOVE_LIST
} from '../constants/list'

const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case GET_LISTS_REQUEST:
            return { ...state, year: action.payload, fetching: true };
        case GET_LISTS_SUCCESS:
            return {...action.payload};
        case ADD_LIST:
            return {...state, ...action.payload};
        case REMOVE_LIST:
            return state.filter(item => item.id !== action.payload);
        case CHANGE_NAME:
            return {};
    }
        return state;
}