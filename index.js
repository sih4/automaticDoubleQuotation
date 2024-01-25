// URLチェックとイベントリスナー登録を関数化
function addQuoteToSelectionOnGoogle() {
  if (!document.URL.includes("https://www.google.com")) return;

  document.addEventListener("keydown", handleQuoteWrapping);
}

function handleQuoteWrapping(event) {
  // 事前に定義されたキーと選択テキストの存在を確認
  if (event.shiftKey && event.code === "Quote" && window.getSelection().toString().length) {
    event.preventDefault();
    wrapTextWithQuotes();
  }
}

function wrapTextWithQuotes() {
  const searchElem = document.querySelector("textarea[name='q'].gLFyf");
  const selectedText = window.getSelection().toString();

  // 選択テキストを引用符で囲む
  const wrappedText = `"${selectedText}"`;
  searchElem.value = searchElem.value.replace(selectedText, wrappedText);

  // カーソルの位置を調整
  positionCursorAfterWrappedText(searchElem, wrappedText);
}

function positionCursorAfterWrappedText(element, text) {
  const cursorPosition = element.value.indexOf(text) + text.length;
  element.setSelectionRange(cursorPosition, cursorPosition);
}

addQuoteToSelectionOnGoogle();
