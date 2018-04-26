
axios.get(`https://localhost/auth/sign_in`, {user, password})
    .then(res => {
        const persons = res.data;
        this.setState({ persons });
    })