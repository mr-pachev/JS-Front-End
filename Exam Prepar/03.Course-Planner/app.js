function solve(){
    let inputFields = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }

    const othersDOMElements = {
        wrapper: document.getElementById('wrapper'),
        addBtn: document.getElementById('add-course'),
        editBtn: document.getElementById('edit-course'),
        loadBtn: document.getElementById('load-course')
    }

    const { title, type, description, teacher, _id } = inputFields;
    const { wrapper, addBtn, editBtn, loadBtn } = othersDOMElements;

    let corsesArr = [];
    let tagId = null;

    loadBtn.addEventListener('click', load);

    function load(e){

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

solve();