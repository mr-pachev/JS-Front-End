function create(words) {
   let divContent = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = word;

      console.log(p);
   }
}