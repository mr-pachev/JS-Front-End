function attachEvents() {
    const loadPostBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    let selectContainer= document.getElementById('post');
    const BAS_URL = 'http://localhost:3030/jsonstore/blog/';
     
     loadPostBtn.addEventListener('click', async() => {
        const posts = await fetch(BAS_URL + 'posts');
        const postsContent = await posts.json();

        console.log(postsContent);
     });

     

}

attachEvents();