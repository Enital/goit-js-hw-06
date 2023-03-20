const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener("input", outputName);

function outputName (event) {
    const inputValue = event.currentTarget.value;
    inputValue != '' ? outputEl.textContent = inputValue
    : outputEl.textContent = 'Anonymous';
}
