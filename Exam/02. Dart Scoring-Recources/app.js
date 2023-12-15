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




  function createElement(
    type,
    parentNode,
    content,
    classes,
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
