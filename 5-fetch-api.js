const endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint)
    .then((data) => data.json())
    .then((result => {
        result.forEach(users => {
            console.log(`${users.id} ${users.name}`)
        });
    }))
    .catch(error => console.log(error))