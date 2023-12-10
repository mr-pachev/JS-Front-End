function attachEvents() {
    const loadPostBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    let selectContainer= document.getElementById('posts');
    let postTitile = document.getElementById('post-title');
    let postContent = document.getElementById('post-body');
    let ul = document.getElementById('post-comments');
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

     viewPostBtn.addEventListener('click', async() => {
        const comments = await fetch(BASE_URL + 'comments')
        const commnetInfo = await comments.json();

        postTitile.textContent = '';                 //зарежда заглавието на поста
        postContent.textContent = '';

        const lectedElId = selectContainer.value;           //id-то на селектирания пост

        const postBody = postsContent[lectedElId].body;     //текста на избрания коментар
        const titlePost = postsContent[lectedElId].title;   //заглавиетго на коментара за избрания пост
        
        postTitile.textContent = titlePost;                 //зарежда заглавието на поста
        postContent.textContent = postBody;                 //зарежда съсържанието на поста
        
        ul.textContent = '';
        
        for (const [postId, obj] of Object.entries(commnetInfo)) {
            if (commnetInfo.hasOwnProperty(postId)){
                const li = document.createElement('li');
               
                li.textContent = obj.text;
                ul.appendChild(li);
            };
        
        }
     })
     

}

attachEvents();