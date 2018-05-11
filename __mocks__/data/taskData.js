export const noTasks = {
    isFetching: false,
    items: []
};

export const noTasksWithFetching = {
    isFetching: true,
    items: []
};

export const noTasksWithOneEmptyList = {
    isFetching: false,
    items: [
        {
            listId: 10,
            tasks: []
        }
    ]
};

export const twoTasks = {
    isFetching: false,
    items: [
        {
            listId: 20,
            isFinished: false,
            tasks: [
                {
                    id: 311,
                    position: 1,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 312,
                    position: 2,
                    is_done: true,
                    list_id: 20
                }
            ]
        }
    ]
};

export const twoTasksWithOneAdditionEmtylist = {
    isFetching: false,
    items: [
        {
            listId: 5,
            tasks: []
        },
        {
            listId: 20,
            tasks: [
                {
                    id: 311,
                    position: 1,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 312,
                    position: 2,
                    is_done: true,
                    list_id: 20
                }
            ]
        }
    ]
};

export const threeTasks = {
    isFetching: false,
    items: [
        {
            listId: 5,
            tasks: []
        },
        {
            listId: 20,
            tasks: [
                {
                    id: 311,
                    position: 1,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 312,
                    position: 2,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 313,
                    position: 3,
                    is_done: null,
                    list_id: 20
                }
            ]
        }
    ]
};

export const threeTasksWithOneAdditionEmtylist = {
    isFetching: false,
    items: [
        {
            listId: 5,
            tasks: []
        },
        {
            listId: 20,
            tasks: [
                {
                    id: 311,
                    position: 1,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 312,
                    position: 2,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 313,
                    position: 3,
                    is_done: null,
                    list_id: 20
                }
            ]
        }
    ]
};

export const threeTasksWithOneChangeState = {
    isFetching: false,
    items: [
        {
            listId: 5,
            tasks: []
        },
        {
            listId: 20,
            tasks: [
                {
                    id: 311,
                    position: 1,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 312,
                    position: 2,
                    is_done: true,
                    list_id: 20
                },
                {
                    id: 313,
                    position: 3,
                    is_done: true,
                    list_id: 20
                }
            ]
        }
    ]
};

export const twoTasksWithOneMoved = {
    isFetching: false,
    items: [
        {
            listId: 5,
            tasks: []
        },
        {
            listId: 20,
            tasks: [
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
            ]
        }
    ]
};
