import taskConstants from '../constants/task';

const initialState = {
    items: [],
    isFetching: false
};

export default function lists (state = initialState, action) {
    switch (action.type) {
    case taskConstants.GET_TASKS_BY_LIST_ID_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.GET_TASKS_BY_LIST_ID_SUCCESS:
        return {
            ...state,
            isFetching: false,
            items: [
                ...state.items,
                {
                    'isFinished': false,
                    'listId': action.tasks.listId,
                    'tasks': action.tasks.items
                }
            ]};
    case taskConstants.ADD_TASK_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.ADD_TASK_SUCCESS:
        return {
            ...state,
            items: state.items.map(item => {
                if (item.listId === action.task.list_id) {
                    return {
                        listId: item.listId,
                        tasks: [...item.tasks, action.task]
                    };
                } else {
                    return item;
                }
            }),
            isFetching: false
        };
    case taskConstants.REMOVE_TASK_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.REMOVE_TASK_SUCCESS:
        return {
            ...state,
            items: state.items.map(list => {
                if (list.listId === action.task.list_id) {
                    return {
                        listId: list.listId,
                        tasks: list.tasks.filter(task => task.id !== action.task.id)
                    };
                } else {
                    return list;
                }
            }),
            isFetching: false
        };
    case taskConstants.CHANGE_TASK_STATE_REQUEST:
        return { ...state, isFetching: true};
    case taskConstants.CHANGE_TASK_STATE_SUCCESS:
        return {
            ...state,
            items: state.items.map(list => {
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
            }),
            isFetching: false
        };
    case taskConstants.MOVE_TASK_DOWN_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.MOVE_TASK_DOWN_SUCCESS:
           return {
            ...state,
            items: state.items.map(item => {
                if (item.listId === action.tasks[0].list_id) {
                    return {
                        listId: item.listId,
                        tasks: action.tasks
                    };
                } else {
                    return item;
                }
            }),
            isFetching: false
        };
    case taskConstants.MOVE_TASK_UP_REQUEST:
        return {...state, isFetching: true};
    case taskConstants.MOVE_TASK_UP_SUCCESS:
        return {
            ...state,
            items:  state.items.map(item => {
                if (item.listId === action.tasks[0].list_id) {
                    return {
                        listId: item.listId,
                        tasks: action.tasks
                    };
                } else {
                    return item;
                }
            }),
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
    case taskConstants.CHECK_FOR_FINISH_LIST:
        return {
            ...state,
            items: state.items.map(item => {
                let b = false;
                if (item.listId === action.task.list_id) {
                    b = !(item.tasks.filter(task => task.is_done === false).length > 0)
                }
                return {
                    ...item,
                    isFinished: b
                };
            })
        };
    default:
        return state;
    }
}
