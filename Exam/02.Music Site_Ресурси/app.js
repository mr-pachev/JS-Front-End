window.addEventListener('load', solve);

function solve() {
    
    
    const inputFileds = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    };

    const othersDOMElements = {
        addBtn: document.getElementById('add-btn'),
        addBtn: document.getElementById('add-btn'),
        collectionsSong: document.getElementById('all-hits-container'),
        
    };

    function createElement(type, content, parentNode, classes,  id, attributes){
        const htmlElement = document.createElement(type)
       
        if(content && type !== 'input'){
          htmlElement.textContent = content;
        }
       
        if(content && type === 'input'){
          htmlElement.value = content;
        }
       
        if(id){
          htmlElement.id = id;
        }
      
      if (parentNode){
          parentNode.appendChild(htmlElement);
          }
       
        if (classes){
          htmlElement.classList.add(...classes);
        }
       
        //{ src: 'link to img', href: 'link to site' }
        if (attributes){
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
          }
        } 
        return htmlElement
      }
      
}