// import axios from 'axios';
const lists = [
    {
        id: 1,
        name: 'first list',
    },
    {
        id: 3,
        name: 'second list',
    },
    {
        id: 4,
        name: 'third list',
    }
];

function getLists() {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(lists);
        }, 100);
    })
        .then(
            response => {
                return response;
            },
            error => {
                console.error(error);
            })
        .then(lists => {
            return lists;
        });
}

function addList(listName) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('ok');
        }, 100);
    })
        .then(
            response => {
                return response;
            },
            error => {
                console.error(error);
            })
        .then(res => {
            return res;
        });
}

function renameList(listId, newName) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve({
                id: listId,
                name: newName
            });
        }, 100);
    })
        .then(
            response => {
                return response;
            },
            error => {
                console.error(error);
            })
        .then(res => {
            return res;
        });
}

function removeList(listId) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(listId);
        }, 100);
    })
        .then(
            response => {
                return response;
            },
            error => {
                console.error(error);
            })
        .then(res => {
            return res;
        });
}



export {getLists,removeList,renameList,addList};
