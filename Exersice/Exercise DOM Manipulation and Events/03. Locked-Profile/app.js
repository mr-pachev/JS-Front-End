function lockedProfile() {
  let buttons = Array.from(document.getElementsByTagName("button"));

  for (const button of buttons) {
    button.addEventListener("click", checked);

    function checked(e) {
      let profile = button.parentNode;

      let profileChildren = Array.from(profile.children);
      let buttonCondition = e.target;
      let radioBtn = profileChildren[4];
      let hiddenFiels = profileChildren[9];

      if (buttonCondition.textContent === "Show more" && radioBtn.checked) {
        e.target.textContent = "Hide it";
        hiddenFiels.style.display = "block";

      } else if (buttonCondition.textContent === "Hide it" && radioBtn.checked) {
        e.target.textContent = "Show more";
        hiddenFiels.style.display = "none";
      }

    }
  }
}
