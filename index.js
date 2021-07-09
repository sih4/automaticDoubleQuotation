const searchElem = document.querySelector("input[name='q'");
document.addEventListener('keydown', event => {
  if (event.shiftKey && event.code === 'Digit2') {
    event.preventDefault();
    const searchElemValue = searchElem.value;
    const selectText = window.getSelection().toString();
    const replaceText = searchElemValue.replace(selectText, `"${selectText}"`)
    searchElem.value = replaceText;
  }
})