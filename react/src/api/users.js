const login = async (username, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({username, password});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/users/login", requestOptions)
        .then(response => response.json());
}

export {
    login
};