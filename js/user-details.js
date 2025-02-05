
let idUser = localStorage.getItem("id");

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)

.then(response => {
    return response.json();
})

.then(user => {

    let div = document.querySelector('.body_user');
    div.className = "body_user";

    let arrayUserDiteil = (user) => {
        for (const userKey in user) {
            if (typeof user[userKey] !=='object'){
                let divUser = document.createElement('div');
                divUser.className = "id_div_user";
                divUser.append(`${userKey}: ${user[userKey]}`);
                div.appendChild(divUser);
            }else {
                arrayUserDiteil(user[userKey]);
            }
        }
    }
    arrayUserDiteil(user);

    let button = document.createElement('button');
    button.innerText = "Post of current user";
    div.append(button);

    button.onclick = () => {

        localStorage.setItem("id",`${user.id}`);
        let divPostBase = document.createElement('div');
        divPostBase.className = "divPostBase";

        fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)

            .then(response => {
                return response.json();
            })
            .then(posts => posts.forEach(post =>{

                let divPostBaseFive = document.createElement('div');
                divPostBaseFive.className = "divPostBaseFive";

                let divPost = document.createElement('div');
                divPost.innerText = post.title;

                let buttonPostDiv = document.createElement('div');

                let buttonPost = document.createElement('button');
                buttonPost.innerText = "Post Details";
                buttonPost.onclick = () => {
                    location.href = `post-details.html`;
                    localStorage.setItem("post_id",`${post.id}`);
                };

                divPostBaseFive.append(divPost);
                buttonPostDiv.append(buttonPost);
                divPostBaseFive.append(buttonPostDiv);
                divPostBase.append(divPostBaseFive);
            }) )
        div.append(divPostBase);
    };

    document.body.appendChild(div);

});