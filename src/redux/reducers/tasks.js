const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                ...action.payload
            };
        case 'REMOVE_TASK':
            return state.filter(item => item.id !== action.payload);
        case 'RENAME_TASK':
            return {};
        case 'CHANGE_TASK_STATE': {
            let newState = state;
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === action.payload) {
                    newState[i].isDone = (newState[i].isDone === "1") ? "0" : "1";
                    break;
                }
            }

            return newState;
        }
    }
    return state;
}