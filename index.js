const searchElem = document.querySelector("input[name='q'].gLFyf");
if(document.URL.match("https://www.google.com/search")) {
  document.addEventListener('keydown', event => {
    const selectText = window.getSelection().toString();
    if (event.shiftKey && event.code === 'Digit2' && selectText.length) {
      event.preventDefault();
      const searchElemValue = searchElem.value;
      const replaceText = searchElemValue.replace(selectText, `"${selectText}"`)
      searchElem.value = replaceText;
    }
  })
}