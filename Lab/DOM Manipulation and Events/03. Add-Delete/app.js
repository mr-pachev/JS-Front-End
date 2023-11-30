function addItem() {
  const text = document.querySelector('#newItemText').value;

    const newListItem = document.createElement('li');         //създаване на нов елемент
    newListItem.textContent = text;                           //пълнене на елемента

    const deleteLink = document.createElement('a');           //създаване на нов елемент
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';                      //пълнене на елемента
    newListItem.append(deleteLink);                           //добавяне на елемента към тага

    const list = document.querySelector('#items');            //взимаме елемента, в който трябва да добавим новия елемент
    list.appendChild(newListItem);
    document.querySelector('#newItemText').value = '';        //зачистваме входа

    deleteLink.addEventListener('click', deleteRow); 

    function deleteRow(e){
      const rowForDelete = e.currentTarget.parentNode;

      console.log(rowForDelete);
    }
}