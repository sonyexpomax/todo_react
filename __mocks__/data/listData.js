export const noLists = {
    isFetching: false,
    items: []
};

export const noListsWithFetching = {
    isFetching: true,
    items: []
};

export const twoLists = {
    isFetching: false,
    items: [
        {
            id: 22,
            label: '2222222'
        },
        {
            id: 23,
            label: '333333333'
        }
    ]
};

export const twoListsWithOneRenamed = {
    isFetching: false,
    items: [
        {
            id: 22,
            label: '2222222'
        },
        {
            id: 23,
            label: '88888888'
        }
    ]
};

export const threeLists = {
    isFetching: false,
    items: [
        {
            id: 22,
            label: '2222222'
        },
        {
            id: 23,
            label: '333333333'
        },
        {
            id: 24,
            label: '444444'
        }
    ]
};

export const listsFromServer = [
    {id: 20, label: '66000000000'},
    {id: 21, label: '5656'}
];

export const tasksPerListFromServer21 = [
    {id: 1, label: 'aaaaa'},
    {id: 2, label: 'bbbbb'}
];
export const tasksPerListFromServer20 = [
    {id: 3, label: 'nnnnn'},
    {id: 4, label: 'ccccc'}
];
