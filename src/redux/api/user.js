import axios from 'axios';

function loginUser(email, password) {
    const requestOptions = { email, password };
    console.log(requestOptions);

    return axios.post('http://localhost:3000/auth/sign_in', requestOptions)
        .then(response => {
            console.log(response.ok);
            console.log(response.headers);
            if (!response.ok) {
                console.log('++');
                return Promise.reject(response.statusText);
            }
            return response;
        })
        .then(user => {
            console.log(user);
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logoutUser() {
    localStorage.removeItem('user');
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
