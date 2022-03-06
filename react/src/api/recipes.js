const getRecipes = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/recipes", {headers})
    .then(res => res.json())
}

const createRecipes = async (recipe, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({recipe});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/recipes", requestOptions)
        .then(response => response.json());
}

const deleteRecipes = async (recipe, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/recipes/" + recipe._id, requestOptions)
        .then(response => response.text());
}

export {
    getRecipes,
    createRecipes,
    deleteRecipes
}