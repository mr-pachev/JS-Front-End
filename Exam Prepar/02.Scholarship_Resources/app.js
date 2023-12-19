window.addEventListener("load", solve);

function solve() {
    
  const inputFields = {
        student: document.getElementById('student'),
        university: document.getElementById('university'),
        score: document.getElementById('score'),
  }

  const otherDOMElements = {
    nextBtn: document.querySelector('#next-btn'),
    previewList: document.getElementById('preview-list'),
    candidatesList: document.getElementById('candidates-list'),
  }

  const currentStudent = {};

  const { student, university, score } = inputFields;

  const { nextBtn, previewList, candidatesList } = otherDOMElements;

  nextBtn.addEventListener('click', load)

  function load(){
    let allFormInputs = Object.values(inputFields).every((input) => input.value !== '');

    if(!allFormInputs){
      return;
    }
    
    const li = createElement('li', previewList, null, ['application']);
    const article = createElement('article', li);
    createElement('h4', article, student.value);
    createElement('p', article, `University: ${university.value}`);
    createElement('p', article, `Score: ${score.value}`);

    for (const [key, value] of Object.entries(inputFields)) {
      currentStudent[key] = value.value;
    };

    const editBtn = createElement('button', li, 'edit', ['action-btn']);
    editBtn.classList.add('edit');
    
    const applyBtn = createElement('button', li, 'apply', ['action-btn']);
    applyBtn.classList.add('apply');

    Object.values(inputFields).forEach((input) => input.value = '');
    nextBtn.disabled = true; 
    
    editBtn.addEventListener('click', edit);
    applyBtn.addEventListener('click', apply);
  }

  function edit (e){
   
    for (const key in currentStudent) {
      inputFields[key].value = currentStudent[key];
    }

    e.currentTarget.parentNode.remove();
    nextBtn.disabled = false; 
  }

  function apply(e){
    const {student, university, score} = currentStudent
    const candidatesList = document.getElementById('candidates-list')

    const li = createElement('li', candidatesList, null, ['application']);
    const article = createElement('article', li);
    createElement('h4', article, student.value);
    createElement('p', article, `University: ${university}`);
    createElement('p', article, `Score: ${score}`);

    e.currentTarget.parentNode.remove()
  }

  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type);
  
    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== 'input') {
        htmlElement.textContent = content;
      }
  
      if (content && type === 'input') {
        htmlElement.value = content;
      }
    }
  
    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }
  
    if (id) {
      htmlElement.id = id;
    }
  
    // { src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key])
      }
    }
  
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
  
    return htmlElement;
  }

}
  