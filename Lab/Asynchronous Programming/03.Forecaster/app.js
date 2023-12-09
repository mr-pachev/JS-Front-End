function attachEvents() {
  const inputLocation = document.querySelector("#request > #location");
  const buttonGetWeather = document.querySelector("#request > #submit");
  let BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations";

  buttonGetWeather.addEventListener("click", getLocation);

  function getLocation() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((locationInfo) => {
        for (const key in locationInfo) {
          console.log(key);
        }
      })
      .catch((err) => {});
  }
}

attachEvents();
