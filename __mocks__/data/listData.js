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
    {id: 35, label: '5656'},
    {id: 40, label: 'r44444444444444'},
    {id: 41, label: 'aaddas'}
];
