function addItem() {
    const text = document.querySelector('#newItemText').value;

    const newListItem = document.createElement('li');   //създаване на нов елемент
    newListItem.textContent = text;                     //пълнене на елемента

    const list = document.querySelector('#items');      //взимаме елемента, вкойто трябва да добавим новия елемент
    list.appendChild(newListItem);
    document.querySelector('#newItemText').value = '';  //зачистваме входа
}