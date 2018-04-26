const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case 'ADD_INFO':
            return {
                ...action.payload
            };
        case 'REMOVE_INFO':
            return {};
    }
    return state;
}