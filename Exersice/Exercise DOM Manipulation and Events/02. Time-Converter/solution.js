function attachEventsListeners() {
  let days = document.getElementById("days");
  let daysBtn = document.getElementById("daysBtn");

  let hours = document.getElementById("hours");
  let hoursBtn = document.getElementById("hoursBtn");

  let minutes = document.getElementById("minutes");
  let minutesBtn = document.getElementById("minutesBtn");

  let seconds = document.getElementById("seconds");
  let secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", () => {
    hours.value = Number(days.value) * 24;
    minutes.value = Number(hours.value) * 60;
    seconds.value = Number(minutes.value) * 60;
  });

  hoursBtn.addEventListener("click", () => {
    days.value = Number(hours.value) / 24;
    minutes.value = Number(hours.value) * 60;
    seconds.value = Number(minutes.value) * 60;
  });

  minutesBtn.addEventListener("click", () => {
    hours.value = Number(minutes.value) / 60;
    days.value = Number(hours.value) / 24;
    seconds.value = Number(minutes.value) * 60;
  });

  secondsBtn.addEventListener("click", () => {
    minutes.value = Number(seconds.value) / 60;
    hours.value = Number(minutes.value) / 60;
    days.value = Number(hours.value) / 24;
  });
}
