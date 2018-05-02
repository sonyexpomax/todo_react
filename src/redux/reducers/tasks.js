import taskConstants from '../constants/task'

const initialState = {
    items: [],
    isFetching: false,
    maxTaskId: 0
};

export default function lists(state = initialState, action) {
    switch (action.type) {
        case taskConstants.GET_TASKS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case taskConstants.GET_TASKS_SUCCESS:
            console.log(action);
            return Object.assign({}, state, {
                isFetching: false,
                items: action.tasks
            });
        case taskConstants.ADD_TASK_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case taskConstants.ADD_TASK_SUCCESS:
            let newTask = {
                id: state.maxTaskId,
                listId: action.task.listId,
                text: action.task.text,
                isFinished:0
            };
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    newTask
                ],
                isFetching: false,
            });

        case taskConstants.FIND_MAX_TASK_ID:
            let maxId = 0;
            state.items.forEach((item)=>{
                maxId = (item.id > maxId) ? item.id : maxId;
            });
            return Object.assign({}, state, {maxTaskId:maxId});
        case taskConstants.INCREASE_MAX_TASK_ID:
            return Object.assign({}, state,
                {
                    maxTaskId: ++state.maxTaskId
                }
            );

        case taskConstants.REMOVE_TASK_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case taskConstants.REMOVE_TASK_SUCCESS:
            return Object.assign({}, state,
                {
                    items: state.items.filter(item => item.id !== action.task),
                    isFetching: false
                }
            );

        case taskConstants.CHANGE_TASK_STATE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case taskConstants.CHANGE_TASK_STATE_SUCCESS:
            console.log(action);
            return Object.assign({}, state,
                {
                    items: state.items.map(task =>
                        (task.id === action.task)
                            ? {...task, is_done: !task.is_done}
                            : task
                    ),
                    isFetching: false
                });

        // case taskConstants.MOVE_TASK_ABOVE_REQUEST:
        //     return Object.assign({}, state, {
        //         isFetching: true,
        //     });
        // case taskConstants.MOVE_TASK_ABOVE_SUCCESS:
        //     let newTaskList = state.items.splice(action.task.taskId+1, 0, this.splice(action.task.taskId, 1)[0]);
        //     return Object.assign({}, state, {
        //         isFetching: true,
        //     });


    }
    return state;
}