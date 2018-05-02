import axios from 'axios';

function loginUser(email, password) {
    const requestOptions = { email, password };
    console.log(requestOptions);

    return axios.post('http://localhost:3000/auth/sign_in', requestOptions)
        .then(
            response => {
                console.log(response);
                return response.headers;
            },
            error => {
                console.error(error);
            })
        .then(headers => {
            console.log(headers);
            localStorage.setItem('access-token', headers['access-token']);
            localStorage.setItem('client', headers.client);
            localStorage.setItem('uid', headers.uid);
            return headers;
        });
}

function logoutUser() {
    return axios.delete('http://localhost:3000/auth/sign_out')
        .then(
            response => {
                return response;
            },
            error => {
                console.error(error);
            })
        .then(res => {
            console.log(res);
            localStorage.removeItem('access-token');
            localStorage.removeItem('client');
            localStorage.removeItem('uid');
            return res;
        });
}

function registerUser(email, password, password_confirmation) {
    const options = {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        confirm_success_url: ''
    };

    return axios.post('http://localhost:3000/auth/', options)
        .then(response => {
            if (!response.ok) {
                console.log(response);
                return Promise.reject(response.statusText);
            }
            console.log('-');
            return response.json();
        }
    );
}

export {loginUser, logoutUser, registerUser};
