window.addEventListener("load", solve);

function solve() {
  const inputDOMElements = {        //обект съдържащ входните полета
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story')
  }

  const publishBtn = document.getElementById('form-btn'); 

  publishBtn.addEventListener('click', sendStory)

  function sendStory(){             //зареждане на данните от полетата в ul
    const allFormInputs = Object.values(inputDOMElements) .every(input => input.value !== '');	

    if(!allFormInputs){             //проверка за празни полета
      return;
    }

    const {firstName, lastName, age, storyTitle, genre, story} = inputDOMElements; //взимане на полетата от входния обект
    const ul = document.getElementById('preview-list');

    //създаване на DOM елементи в ul
    const li = createElement('li', null, ul, null, ['story-info']);
    const article = createElement('article', null, li);
    const h4 = createElement('h4', `Name: ${firstName.value} ${lastName.value}`, article);
    const agePar = createElement('p', `Age: ${age.value}`, article);
    const titlePar = createElement('p', `Title: ${storyTitle.value}`, article);
    const genrePar = createElement('p', `Genre: ${genre.value}`, article);
    const textPar = createElement('p', `Genre: ${story.value}`, article);
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


