
let idPost = localStorage.getItem("post_id")

fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)

    .then(response => {
        return response.json();
    })

    .then(post => {

        let divPostDetails = document.createElement('div');
        divPostDetails.className = "divPostDetails";

        let divIdPost = document.createElement('div');
            divIdPost.className = "divIdPost";
            divIdPost.innerText = `Номер статьи: ${post.id}`;
            divPostDetails.append(divIdPost);

        let divTittlePost = document.createElement('div');
            divTittlePost.className = "divTittlePost";
            divTittlePost.innerHTML = `Название статьи: <br><b>${post.title}</b>`;
            divPostDetails.append(divTittlePost);

        let divBodyPost = document.createElement('div');
            divBodyPost.className = "divBodyPost";
            divBodyPost.innerText = `Содержание статьи: \n${post.body}`;

            divPostDetails.append(divBodyPost);

        let divComents = document.createElement('div');
        divComents.className = "divComents";

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)

            .then(response => {
                return response.json();
            })

            .then(coments => coments.forEach(coment => {

                let divPostComents = document.createElement('div');
                divPostComents.innerHTML = `Номер комментария: <b>${coment.id}</b>
                <br>Название комментария: <h4>${coment.name}</h4><hr>
                 <p>Email: ${coment.email}</p><hr><p>${coment.body}</p>`;
                divComents.append(divPostComents);

            }));

        document.body.appendChild(divPostDetails);

        document.body.appendChild(divComents);
    });
