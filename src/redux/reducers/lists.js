const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...action.payload
            };
        case 'CHANGE_NAME':
            return {};
    }
        return state;
}