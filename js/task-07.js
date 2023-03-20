const inputFontSizeEl = document.querySelector('#font-size-control');
const newFontSizeEl = document.querySelector('#text');

inputFontSizeEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    const targetFontSize = event.currentTarget.value;
    newFontSizeEl.style.fontSize = `${targetFontSize}px`;
}
