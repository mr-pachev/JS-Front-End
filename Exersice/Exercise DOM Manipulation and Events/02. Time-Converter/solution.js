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
}
