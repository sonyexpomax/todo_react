// import axios from 'axios';
import axios from "axios/index";

function getTasks(token, client, uid) {
    let headers = {
        headers: {
            'access-token': token,
            'client': client,
            'uid': uid
        }
    };

    console.log(headers);
    return axios.get('http://localhost:3000/v1/tasks', headers)
        .then(
            response => {
                return response.data;
            },
            error => {
                console.error(error);
            })
}

function changeTaskState(token, client, uid, taskId) {
    console.log(taskId);

    let headers = {
        'Access-Control-Allow-Origin': '*',
        'access-token': token,
        'client': client,
        'uid': uid
    };

    return axios.put(`http://localhost:3000/v1/tasks/${taskId}`, {id:taskId}, {'headers' : headers})
        .then(
            response => {
                return response.data.id;
            },
            error => {
                console.error(error);
            })
}

function addTask(token, client, uid, content, listId) {
    let headers = {
        'access-token': token,
        'client': client,
        'uid': uid
    };

    console.log(content, listId);
    return axios.post('http://localhost:3000/v1/tasks', {content:content, listId:listId}, {'headers' : headers})
        .then(
            response => {
                console.log(response.data);
                // return response.data;
            },
            error => {
                console.error(error);
            })
}

function removeTask(token, client, uid, taskId) {
    console.log(taskId);
    let headers = {
        'access-token': token,
        'client': client,
        'uid': uid
    };

    return axios.delete(`http://localhost:3000/v1/tasks/${taskId}`, {'headers' : headers})
        .then(
            response => {
                console.log(response.data);
                return response.data;
            },
            error => {
                console.error(error);
            })
}

function moveTaskUp(token, client, uid, taskId) {
    let headers = {
        'access-token': token,
        'client': client,
        'uid': uid
    };

    console.log(taskId);
    return axios.put(`http://localhost:3000/v1/tasks/${taskId}/up`, {id:taskId}, {'headers' : headers})
        .then(
            response => {
                console.log(response.data);
                // return response.data;
            },
            error => {
                console.error(error);
            })
}

function moveTaskDown(token, client, uid, taskId) {
    let headers = {
        'access-token': token,
        'client': client,
        'uid': uid
    };

    console.log(taskId);
    return axios.put(`http://localhost:3000/v1/tasks/${taskId}/down`, {id:taskId}, {'headers' : headers})
        .then(
            response => {
                console.log(response.data);
                // return response.data;
            },
            error => {
                console.error(error);
            })
}

export {getTasks, removeTask, addTask, changeTaskState, moveTaskDown, moveTaskUp};
