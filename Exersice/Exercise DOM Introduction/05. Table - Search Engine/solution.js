function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody td'));
      let searchField = document.getElementById('searchField').value;

      for (const current of rows) {
        
         if(current.textContent.includes(searchField)){
            console.log('YES');
         }

      }
   }
}