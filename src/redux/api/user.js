import axios from 'axios';

function loginUser (email, password) {
    const requestOptions = { email, password };
    return axios.post('http://localhost:3000/auth/sign_in', requestOptions)
        .then(
            response => {
                return response.headers;
            },
            error => {
                console.error('error');
            })
        .then(headers => {
            localStorage.setItem('access-token', headers['access-token']);
            localStorage.setItem('client', headers.client);
            localStorage.setItem('uid', headers.uid);
            return headers;
        });
}

function logoutUser () {
    return axios.delete('http://localhost:3000/auth/sign_out')
        // return axios.delete('http://api-ornull-list.herokuapp.com/auth/sign_out')
        .then(
            response => {
                return response;
            },
            error => {
                console.error('error');
            })
        .then(res => {
            localStorage.removeItem('access-token');
            localStorage.removeItem('client');
            localStorage.removeItem('uid');
            return res;
        });
}

function registerUser (email, password, passwordConfirmation) {
    const options = {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        confirm_success_url: ''
    };

    return axios.post('http://localhost:3000/auth/', options)
        .then(
            response => {
                return response;
            },
            error => {
                console.error('error');
            });
}

export {loginUser, logoutUser, registerUser};
