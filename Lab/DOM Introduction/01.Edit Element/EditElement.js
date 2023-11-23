function editElement(ref, match, replacer) {
  let content = ref.textContent;
  let matcher = new RegExp(match, g);
  let edited = content.replace(match, replacer);
}
