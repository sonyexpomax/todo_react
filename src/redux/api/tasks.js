// import axios from 'axios';

const tasks = [
            {
                id: 132,
                listId: 1,
                text: 'aaaaa a aa aaaaaaa aa aaaa',
                isFinished: 1,
            },
            {
                id: 133,
                listId: 1,
                text: 'v v vvv v v v v vvvvvvvvvvvvvv',
                isFinished: 0,
            },
            {
                id: 130,
                listId: 3,
                text: 'c c ccccc c c c c c c c ',
                isFinished: 0,
            },
            {
                id: 134,
                listId: 4,
                text: 'fffdfsdfs sdfsdfs dfs dfsdfs',
                isFinished: 1,
            },
            {
                id: 232,
                listId: 1,
                text: 'arrrrrrrrrrrrr',
                isFinished: 1,
            },
            {
                id: 233,
                listId: 4,
                text: 'uuuuuuuuuuuuuuuuuuuuuuu',
                isFinished: 0,
            },
            {
                id: 200,
                listId: 3,
                text: 'ooooooooooooooo ',
                isFinished: 1,
            },
            {
                id: 32,
                listId: 1,
                text: 'ayyyyyyyyyyyyyaaa',
                isFinished: 0,
            },
            {
                id: 13,
                listId: 4,
                text: 'rrrrrrrrrrrrrrvvvvvv',
                isFinished: 1,
            },
            {
                id: 30,
                listId: 3,
                text: 'erggrgereger',
                isFinished: 0,
            },
            {
                id: 34,
                listId: 4,
                text: 'fkkkkkkkkkkkkkkkkkkkkks'
            }
];

function getTasks() {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(tasks);
        }, 600);
    })
        .then(
            tasks => {
                return tasks;
            },
            error => {
                console.error(error);
            })
        .then(tasks => {
            console.log(tasks);
            return tasks;
        });
}


function addTask(task) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('ok');
        }, 100);
    })
        .then(
            response => task,
            error => console.error(error)
        )
        // .then(
        //     res => res
        // );
}

function removeTask(task) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('ok');
        }, 100);
    })
        .then(
            res => {
                return task;
            },
            error => {
                console.error(error);
            })
        // .then(res => {
        //     return res;
        // });
}

function changeTaskState(task) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('ok');
        }, 100);
    })
        .then(
            res => {
                return task;
            },
            error => {
                console.error(error);
            })
    // .then(res => {
    //     return res;
    // });
}

function showAllTasks() {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('ok');
        }, 100);
    })
        .then(
            res => {
                return res;
            },
            error => {
                console.error(error);
            })
}

function showFinishedTasks() {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('ok');
        }, 100);
    })
        .then(
            res => {
                return res;
            },
            error => {
                console.error(error);
            })
}

export {getTasks, removeTask, addTask, changeTaskState, showAllTasks, showFinishedTasks};
