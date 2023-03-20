const inputTextEl = document.querySelector('#validation-input');
inputTextEl.addEventListener('blur', checkSymbolCount);

function checkSymbolCount(event) {
    const enterSymbolsCount = event.currentTarget.value.length;
    const targetSymbolsCount = Number(inputTextEl.dataset.length);

    if (enterSymbolsCount === targetSymbolsCount) {
        inputTextEl.classList.add('valid');
        inputTextEl.classList.remove('invalid');
    } else {
        inputTextEl.classList.add('invalid');
        inputTextEl.classList.remove('valid');
    }
};