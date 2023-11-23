function editElement(ref, match, replacer) {
  let content = ref.textContent;

  let edited = content.replace(new RegExp(match, "g"), replacer);
  ref.content - edited;
}
