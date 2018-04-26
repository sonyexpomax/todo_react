const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...action.payload
            };
        case 'ADD_LIST':
            return {
                ...state,
                ...action.payload
            };
        case 'REMOVE_LIST':
            return state.filter(item => item.id !== action.payload);
        case 'CHANGE_NAME':
            return {};
    }
        return state;
}