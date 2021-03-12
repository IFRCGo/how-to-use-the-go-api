const postBody = {
    username: 'Jonathan',
    password: 'This_is_my_secret_password',
};

fetch('https://goadmin.ifrc.org/get_auth_token', {
    method: 'POST',
    body: JSON.stringify(postBody),
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log(`GO_API_AUTHORIZATION_TOKEN=${data.token}`);
    });
