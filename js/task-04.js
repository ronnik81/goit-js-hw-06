'use strict';

const counterEl = document.querySelector('#value');
let counterValue = 0;

const decrButtonEl = document.querySelector('button[data-action="decrement"]');
const incrButtonEl = document.querySelector('button[data-action="increment"]');

const changeValueMinus = () => {
    counterEl.innerHTML = counterValue -= 1;
}

const changeValuePlus = () => {
    counterEl.innerHTML = counterValue += 1;
}

decrButtonEl.addEventListener('click', changeValueMinus);
incrButtonEl.addEventListener('click', changeValuePlus);