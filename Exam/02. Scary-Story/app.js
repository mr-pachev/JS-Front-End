window.addEventListener("load", solve);

function solve() {
  let inputDOMElements = {
    'first-name': document.getElementById('first-name').value,
    'last-name': document.getElementById('last-name'),
    'age': document.getElementById('age'),
    'story-title': document.getElementById('story-title'),
    'genre': document.getElementById('genre'),
    'story': document.getElementById('story')
  }

  const inputDOMSelectors = {key: value};

	const allFormInputs = Object.values(inputDOMSelectors) .every(input => input.value !== '');		//ако има празен елемент ще върне false

}


