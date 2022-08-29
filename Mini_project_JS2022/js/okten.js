
fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => {
        return response.json();
    })

.then(users => users.forEach(user => {

    let div = document.querySelector('.body_div');
    div.className = "body_div";

    let divBlock = document.createElement('div');
        divBlock.className = "medium_div";

    let id_div = document.createElement('div');
        id_div.className = "id_div";

    let h3 = document.createElement('h3');
        h3.innerText = user.id;
        id_div.append(h3);

    let h4 = document.createElement('h4');
        h4.innerText = user.name;
        id_div.append(h4);

    let button = document.createElement('button');
        button.innerText = "User details";
        id_div.append(button);

    divBlock.append(id_div);
    div.append(divBlock);

    document.body.appendChild(div);

    button.onclick = () => {
        location.href = 'user-details.html';
        localStorage.setItem("id",`${user.id}`);
    }
}));
