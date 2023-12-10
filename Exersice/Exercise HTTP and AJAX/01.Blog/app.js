function attachEvents() {
    const loadPostBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    let selectContainer= document.getElementById('posts');
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/';

    let postsContent = {};
     
     loadPostBtn.addEventListener('click', async () => {
        const posts = await fetch(BASE_URL + 'posts');
        postsContent = await posts.json();

        for (const [postId, postObj] of Object.entries(postsContent)) {
            const option = document.createElement('option');
            
            option.value = postId;
            option.textContent = postObj.title;

            selectContainer.appendChild(option);
        }
        


     });

     

}

attachEvents();