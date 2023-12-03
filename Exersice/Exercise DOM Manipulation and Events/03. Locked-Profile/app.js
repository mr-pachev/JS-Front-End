function lockedProfile() {
  let buttons = Array.from(document.getElementsByTagName("button"));

  for (const button of buttons) {
    buttonCondition.addEventListener("click", checked);

    function checked(e) {
      let profile = button.parentNode;

      let profileChildren = Array.from(profile.children);
      let buttonCondition = profileChildren[10];
      let radioBtn = profileChildren[2];
      let hiddenFiels = profileChildren[9];
    }
  }
}
