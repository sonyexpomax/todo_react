import {
    GET_LISTS_SUCCESS,
    GET_LISTS_REQUEST,
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    REMOVE_LIST_REQUEST,
    REMOVE_LIST_SUCCESS,
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    FIND_MAX_LIST_ID,
    INCREASE_MAX_LIST_ID
} from '../constants/list'

const initialState = {
    items: [],
    isFetching: false,
    maxListId: 0
};

export default function lists(state = initialState, action) {
    switch (action.type) {
        case GET_LISTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case GET_LISTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.lists
            });
        case ADD_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case ADD_LIST_SUCCESS:
            let newList = {
                id: state.maxListId,
                name: action.listName
            };
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    newList
                ],
                isFetching: false
            });
        case REMOVE_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case REMOVE_LIST_SUCCESS:
            return Object.assign({}, state,
                {
                    items: state.items.filter(item => item.id !== action.list),
                    isFetching: false
                }
            );
        case RENAME_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RENAME_LIST_SUCCESS:
            let newState = state.items.map((item)=>{
                if(item.id == action.list.id){
                    item.name = action.list.name;
                }
                return item;
            });
            return Object.assign({}, state,
                {
                    items: newState,
                    isFetching: false
                });
        case FIND_MAX_LIST_ID:
            let maxId = 0;
            state.items.forEach((item)=>{
                maxId = (item.id > maxId) ? item.id : maxId;
            });
            return Object.assign({}, state, {maxListId:maxId});
        case INCREASE_MAX_LIST_ID:
            return Object.assign({}, state,
                {
                    maxListId: ++state.maxListId
                }
            );
        default:
            return state
    }
}