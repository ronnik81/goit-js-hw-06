'use strict';

const counterEl = document.querySelector('#value');
let counterValue = 0;

const decrButtonEl = document.querySelector('button[data-action="decrement"]');
const incrButtonEl = document.querySelector('button[data-action="increment"]');
const decrvalue = -1;
const incrvalue = 1;

const changeValueMinus = () => {
    counterEl.innerHTML = counterValue += decrvalue;
}

const changeValuePlus = () => {
    counterEl.innerHTML = counterValue += incrvalue;
}

decrButtonEl.addEventListener('click', changeValueMinus);
incrButtonEl.addEventListener('click', changeValuePlus);