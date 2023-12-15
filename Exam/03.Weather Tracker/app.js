function solve() {
  let inputFields = {
    location: document.getElementById("location"),
    temperature: document.getElementById("temperature"),
    date: document.getElementById("date"),
  };

  let otherDOMElements = {
    inputContainer: document.getElementById("form"),
    addWeatherBtn: document.getElementById("add-weather"),
    editWeatherBtn: document.getElementById("edit-weather"),
    loadBtn: document.getElementById("load-history"),
    wetherContainer: document.getElementById("list"),
    changeBtn: document.querySelector('.change-btn'),
  };

  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  const { location, temperature, date } = inputFields;
  const {
    inputContainer,
    addWeatherBtn,
    editWeatherBtn,
    loadBtn,
    wetherContainer,
  } = otherDOMElements;

  let arrWeathers = {};
  let tagId = null;
  
  loadBtn.addEventListener("click", loadWeather);
  addWeatherBtn.addEventListener('click', addWeather);

  function loadWeather(e) {
    if (e) {
      e.preventDefault();
    }

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        wetherContainer.innerHTML = ''; 
         arrWeathers = Object.values(data);

        for (const key in data) {
          const div = createElement("div", wetherContainer, null, [
            "container",
          ]);
          div.id = data[key]._id;
          createElement("h2", div, data[key].location);
          createElement("h3", div, data[key].date);
          createElement("h3", div, data[key].temperature, null, ["celsius"]);
          const divButtons = createElement("div", div, null, [
            "buttons-container",
          ]);
          const changeBtn = createElement("button", divButtons, "Change", [
            "change-btn",
          ]);
          const deleteBtn = createElement("button", divButtons, "Delete", [
            "delete-btn",
          ]);
        }
      })
      .catch((err) => console.error(err));
  }

  function addWeather(e){
    e.preventDefault();

    let allFormInputs = Object.values(inputFields) .every((input) => input.value !== '');
    if(!allFormInputs){
        return;
    }

    const { location, temperature, date } = inputFields;

    const httpHeaders = {
		method: 'POST',
		body: JSON.stringify({ 
		            location: location.value,
            		temperature: temperature.value,
            		date: date.value
        })
	}

	fetch(BASE_URL, httpHeaders)
		.then(() => {
      Object.values(inputFields).forEach((input) => input.value = '');
      loadWeather()
    })
		.catch((err) => {
			concole.error(err)
		})

  }

  document.addEventListener('click', click);

  function click(event) {
    event.preventDefault();

    let clickedElement = event.target; 
    let containerId = clickedElement.parentNode.parentNode.id;
    tagId = clickedElement.parentNode.parentNode.id;

 for (const key in arrWeathers) {
   if (containerId === arrWeathers[key]._id &&  event.target.textContent === 'Change'){ 
       let obj = arrWeathers[key];

      for (const key in obj) {
        inputFields[key].value = obj[key]; 
        clickedElement.parentNode.parentNode.parentNode.remove();
      }
    //  for (const iterator of Object.keys(arrWeathers[key])) {
    //     inputFields[iterator].value = arrWeathers[key][iterator]; 
    //   }
    
    }
    
  }

  addWeatherBtn.disabled = true;
  editWeatherBtn.disabled = false;

  editWeatherBtn.addEventListener('click', edithWeth);
}

function edithWeth(e){
  e.preventDefault();

  const { location, temperature, date } = inputFields;

    console.log(tagId)

    const httpHeaders = {
		method: 'PUT',
		body: JSON.stringify({ 
		            location: location.value,
            		temperature: temperature.value,
            		date: date.value
        })
	}

	fetch(`${BASE_URL}${tagId}`, httpHeaders)
		.then(() => {
      tagId = null;
      Object.values(inputFields).forEach((input) => input.value = '');
      loadWeather()
    })
		.catch((err) => {
			concole.error(err)
		})
}

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

solve();
