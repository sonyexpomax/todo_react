import axios from 'axios';

function getLists (token, client, uid) {
    let headers = {
        headers: {
            'access-token': token,
            'client': client,
            'uid': uid
        }
    };

    return axios.get('http://localhost:3000/v1/lists', headers)
        .then(
            response => {
                return response.data;
            },
            error => {
                console.error(error);
            });
}

function addList (token, client, uid, list) {
    let headers = {
        'access-token': token,
        'client': client,
        'uid': uid
    };

    return axios.post('http://localhost:3000/v1/lists', {label: list}, {'headers': headers})
        .then(
            response => {
                return response.data;
            },
            error => {
                console.error(error);
            });
}

function removeList (token, client, uid, listId) {
    let headers = {
        'access-token': token,
        'client': client,
        'uid': uid
    };

    return axios.delete(`http://localhost:3000/v1/lists/${listId}`, {'headers': headers})
        .then(
            response => {
                return response.data;
            },
            error => {
                console.error(error);
            });
}

function renameList (token, client, uid, listId, newName) {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'access-token': token,
        'client': client,
        'uid': uid
    };

    return axios.put(`http://localhost:3000/v1/lists/${listId}`, {label: newName}, {'headers': headers})
        .then(
            response => {
                return response.data;
            },
            error => {
                console.error(error);
            });
}

export {getLists, removeList, renameList, addList};
