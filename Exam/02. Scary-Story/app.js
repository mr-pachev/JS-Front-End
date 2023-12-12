window.addEventListener("load", solve);

function solve() {
  let inputDOMElements = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story')
  }

  const publishBtn = document.getElementById('form-btn');

  publishBtn.addEventListener('click', sendStory)

  function sendStory(){
    const allFormInputs = Object.values(inputDOMElements) .every(input => input.value !== '');	

    if(!allFormInputs){
      return;
    }

    const {firstName, lastName, age, storyTitle, genre, story} = inputDOMElements;
    const ul = document.getElementById('preview-list');

    const li = createElement('li', null, ul, null, ['story-info']);
    const article = createElement('article', null, li);
    const h4 = createElement('h4', `Name: ${firstName.value} ${lastName.value}`, article);
    const agePar = createElement('p', `Age: ${age.value}`, article);
  }
	

  function createElement(type, content, parentNode, id, classes, attributes){
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
   
    if (classes){
      htmlElement.classList.add(...classes);
    }
   
    if (parentNode){
      parentNode.appendChild(htmlElement);
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


