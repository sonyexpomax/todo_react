import taskConstants from '../constants/task';

const initialState = {
    items: [],
    isFetching: false
};

let newTasks;

export default function lists (state = initialState, action) {
    switch (action.type) {
    // case taskConstants.GET_TASKS_REQUEST:
    //     return {...state, isFetching: true};
    // case taskConstants.GET_TASKS_SUCCESS:
    //     return {...state, isFetching: false, items: action.tasks};
    case taskConstants.GET_TASKS_BY_LIST_ID_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.GET_TASKS_BY_LIST_ID_SUCCESS:
        return {
            ...state,
            isFetching: false,
            items: [
                ...state.items,
                {
                    'listId': action.tasks.listId,
                    'tasks': action.tasks.items
                }
            ]};
    case taskConstants.ADD_TASK_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.ADD_TASK_SUCCESS:
        newTasks = state.items.map(item => {
            if (item.listId === action.task.list_id) {
                return {
                    listId: item.listId,
                    tasks: [...item.tasks, action.task]
                };
            } else {
                return item;
            }
        });
        return {
            ...state,
            items: newTasks,
            isFetching: false
        };
    case taskConstants.REMOVE_TASK_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.REMOVE_TASK_SUCCESS:
        newTasks = state.items.map(list => {
            if (list.listId === action.task.list_id) {
                return {
                    listId: list.listId,
                    tasks: list.tasks.filter(task => task.id !== action.task.id)
                };
            } else {
                return list;
            }
        });
        return {
            ...state,
            items: newTasks,
            isFetching: false
        };
    case taskConstants.CHANGE_TASK_STATE_REQUEST:
        return { ...state, isFetching: true};
    case taskConstants.CHANGE_TASK_STATE_SUCCESS:
        newTasks = state.items.map(list => {
            if (list.listId === action.task.list_id) {
                return {
                    listId: list.listId,
                    tasks: list.tasks.map(task => (task.id === action.task.id)
                        ? {...task, is_done: !task.is_done}
                        : task
                    )
                };
            } else {
                return list;
            }
        });
        return {
            ...state,
            items: newTasks,
            isFetching: false
        };
    case taskConstants.MOVE_TASK_DOWN_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.MOVE_TASK_DOWN_SUCCESS:
        newTasks = state.items.map(item => {
            if (item.listId === action.tasks[0].list_id) {
                return {
                    listId: item.listId,
                    tasks: action.tasks
                };
            } else {
                return item;
            }
        });
        return {
            ...state,
            items: newTasks,
            isFetching: false
        };
    case taskConstants.MOVE_TASK_UP_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.MOVE_TASK_UP_SUCCESS:
        newTasks = state.items.map(item => {
            if (item.listId === action.tasks[0].list_id) {
                return {
                    listId: item.listId,
                    tasks: action.tasks
                };
            } else {
                return item;
            }
        });
        return {
            ...state,
            items: newTasks,
            isFetching: false
        };
    case taskConstants.SET_NEW_LIST:
        return {
            ...state,
            items: [
                ...state.items,
                {listId: action.listId, tasks: []}
            ]
        };
    default:
        return state;
    }
}
