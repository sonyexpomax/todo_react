import {
    threeTasks,
    twoTasks,
    threeTasksWithOneChangeState,
    twoTasksWithOneMoved,
    noTasks,
    noTasksWithFetching,
    noTasksWithOneEmptyList,
    twoTasksWithOneAdditionEmtylist,
    threeTasksWithOneAdditionEmtylist
} from '../../../__mocks__/data/taskData';
import tasksConstants from '../../../src/redux/constants/task';
import {default as tasksReducer} from '../../../src/redux/reducers/tasks';

describe('REDUCER --- Test list Reducers for tasks', () => {
    it('+++ reducer for ADD_TASK_REQUEST', () => {
        expect(tasksReducer(noTasks, { type: tasksConstants.ADD_TASK_REQUEST })).toEqual(noTasksWithFetching);
    });
    it('+++ reducer for ADD_TASK_SUCCESS', () => {
        const task = {
            id: 313,
            position: 3,
            is_done: null,
            list_id: 20
        };
        expect(tasksReducer(twoTasksWithOneAdditionEmtylist, { type: tasksConstants.ADD_TASK_SUCCESS, task }))
            .toEqual(threeTasksWithOneAdditionEmtylist);
    });
    it('+++ reducer for REMOVE_TASK_REQUEST', () => {
        expect(tasksReducer(noTasks, { type: tasksConstants.REMOVE_TASK_REQUEST })).toEqual(noTasksWithFetching);
    });
    it('+++ reducer for REMOVE_TASK_SUCCESS', () => {
        const task = {
            id: 313,
            position: 3,
            is_done: null,
            list_id: 20
        };
        expect(tasksReducer(threeTasksWithOneAdditionEmtylist, { type: tasksConstants.REMOVE_TASK_SUCCESS, task }))
            .toEqual(twoTasksWithOneAdditionEmtylist);
    });
    it('+++ reducer for CHANGE_TASK_STATE_REQUEST', () => {
        expect(tasksReducer(noTasks, { type: tasksConstants.CHANGE_TASK_STATE_REQUEST })).toEqual(noTasksWithFetching);
    });
    it('+++ reducer for CHANGE_TASK_STATE_SUCCESS', () => {
        const task = {
            id: 313,
            position: 3,
            is_done: true,
            list_id: 20
        };
        expect(tasksReducer(threeTasks, { type: tasksConstants.CHANGE_TASK_STATE_SUCCESS, task }))
            .toEqual(threeTasksWithOneChangeState);
    });
    it('+++ reducer for MOVE_TASK_UP_REQUEST', () => {
        expect(tasksReducer(noTasks, { type: tasksConstants.MOVE_TASK_UP_REQUEST }))
            .toEqual(noTasksWithFetching);
    });
    it('+++ reducer for MOVE_TASK_UP_SUCCESS', () => {
        const tasks = [
            {
                id: 312,
                position: 1,
                is_done: true,
                list_id: 20
            },
            {
                id: 311,
                position: 2,
                is_done: true,
                list_id: 20
            }
        ];
        expect(tasksReducer(twoTasksWithOneAdditionEmtylist, { type: tasksConstants.MOVE_TASK_UP_SUCCESS, tasks })).toEqual(twoTasksWithOneMoved);
    });
    it('+++ reducer for MOVE_TASK_DOWN_REQUEST', () => {
        expect(tasksReducer(noTasks, { type: tasksConstants.MOVE_TASK_DOWN_REQUEST })).toEqual(noTasksWithFetching);
    });
    it('+++ reducer for MOVE_TASK_DOWN_SUCCESS', () => {
        const tasks = [
            {
                id: 312,
                position: 1,
                is_done: true,
                list_id: 20
            },
            {
                id: 311,
                position: 2,
                is_done: true,
                list_id: 20
            }
        ];
        expect(tasksReducer(twoTasksWithOneAdditionEmtylist, { type: tasksConstants.MOVE_TASK_DOWN_SUCCESS, tasks })).toEqual(twoTasksWithOneMoved);
    });
    it('+++ reducer for GET_TASKS_BY_LIST_ID_REQUEST', () => {
        expect(tasksReducer(noTasks, { type: tasksConstants.GET_TASKS_BY_LIST_ID_REQUEST })).toEqual(noTasksWithFetching);
    });
    it('+++ reducer for GET_TASKS_BY_LIST_ID_SUCCESS', () => {
        const tasks = {
            listId: 20,
            isFinished: false,
            items: [
                {
                    id: 311,
                    position: 1,
                    is_done: true,
                    list_id: 20,
                },
                {
                    id: 312,
                    position: 2,
                    is_done: true,
                    list_id: 20
                }]
        };
        expect(tasksReducer(noTasks, { type: tasksConstants.GET_TASKS_BY_LIST_ID_SUCCESS, tasks })).toEqual(twoTasks);
    });
    it('+++ reducer for SET_NEW_LIST', () => {
        const listId = 10;
        expect(tasksReducer(noTasks, { type: tasksConstants.SET_NEW_LIST, listId })).toEqual(noTasksWithOneEmptyList);
    });
    it('+++ reducer for non-existent action type', () => {
        expect(tasksReducer(twoTasks, { type: 'SOME_ACTION_TYPE' })).toEqual(twoTasks);
    });
    it('+++ reducer for default initial state', () => {
        expect(tasksReducer(undefined, { type: 'SOME_ACTION_TYPE' })).toEqual(noTasks);
    });
});
