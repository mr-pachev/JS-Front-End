window.addEventListener("load", solve);

function solve() {
  const inputFields = {
    playerName: document.getElementById('player'),
    score: document.getElementById('score'),
    round: document.getElementById('round'),
  };

const otherDOMelements = {
  inputConatiner: document.querySelector('.scoring-content'),
  addBtn: document.getElementById('add-btn'),
  sureList: document.getElementById('sure-list'),
  scoreboardList: document.getElementById('scoreboard-list'),
  clearBtn: document.querySelector('.clear'),
}

playerData = {};

const {playerName, score, round} = inputFields;
const {inputConatiner, addBtn, sureList, scoreboardList, clearBtn} = otherDOMelements;

addBtn.addEventListener('click', loadInfo);

function loadInfo(e){
  let allFormInputs = Object.values(inputFields).every((input) => input.value !== '');

  if (!allFormInputs){
   return;
 }

 const liInfo = createElement('li', sureList, null, ['dart-item']);
 const articleInfo = createElement('article', liInfo);
 createElement('p', articleInfo, playerName.value);
 createElement('p', articleInfo, `Score: ${score.value}`);
 createElement('p', articleInfo, `Round: ${round.value}`);
 const editBtn = createElement('button', liInfo, 'edit', ['btn-edit']);
 const okBtn = createElement('button', liInfo, 'ok', ['btn-ok']);

 for (const key in inputFields) {
    playerData[key] = inputFields[key].value
  }

  Object.values(inputFields).forEach((input) => input.value = '');
  addBtn.disabled = true; 
  editBtn.addEventListener('click', editInfo);
  okBtn.addEventListener('click', finished);
}

clearBtn.addEventListener('click', reloadPage);

function reloadPage(){
  location.reload();
}


function editInfo(e){
  for (const key in playerData) {
      inputFields[key].value = playerData[key];
   }
   e.currentTarget.parentNode.remove();
   addBtn.disabled = false; 
}

function finished(e){
  const liInfo = e.currentTarget.previousSibling.previousSibling;
  e.currentTarget.style.display = 'none';
  e.currentTarget.previousSibling.style.display = 'none';

  const li = createElement('li', scoreboardList, null, ['dart-item']);
  li.appendChild(liInfo);
}

  function createElement(type,parentNode,content,classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
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
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
