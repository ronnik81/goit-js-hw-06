'use strict';

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const keyInput = () => {
    inputEl.value === '' ? outputEl.textContent = 'Anonymous' : outputEl.textContent = inputEl.value;
}

inputEl.addEventListener('input', keyInput);