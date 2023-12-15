window.addEventListener("load", solve);

function solve() {
  const inputFields = {
    playerName: document.getElementById('player'),
    score: document.getElementById('score'),
    round: document.getElementById('round'),
  };

const otherDOMelements = {
  inputConatiner: document.getElementById('form-container'),
  addBtn: document.getElementById('add-btn'),
  sureList: document.getElementById('sure-list'),
  scoreboardList: document.getElementById('scoreboard-list'),
  clearBtn: document.querySelector('.btn clear'),
}

playerData = {};

const {playerName, score, round} = inputFields;
const {inputConatiner, addBtn, sureList, scoreboardList, clearBtn} = otherDOMelements;

addBtn.addEventListener('click', loadInfo);


function loadInfo(e){
 const liInfo = createElement('li', sureList, null, ['dart-item']);
 const articleInfo = createElement('article', liInfo);
 createElement('p', articleInfo, playerName.value);
 createElement('p', articleInfo, `Score: ${score.value}`);
 createElement('p', articleInfo, `Round: ${round.value}`);
 const editBtn = createElement('button', liInfo, 'edit', ['btn-edit']);
 const okBtn = createElement('button', liInfo, 'ok', ['btn-ok']);

 editBtn.addEventListener('click', editInfo);
}

function editInfo(){
  
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
