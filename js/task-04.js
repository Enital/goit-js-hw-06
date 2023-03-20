let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const realValueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', changeCounterValue);
incrementBtnEl.addEventListener('click', changeCounterValue);

function changeCounterValue(event) {
    if (event.currentTarget.dataset.action === 'decrement') {
        counterValue -= 1;
    }

    if (event.currentTarget.dataset.action === 'increment') {
        counterValue += 1;
    }
    
    realValueEl.textContent = counterValue;
}