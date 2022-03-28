import { currencies } from './currency.js';
import { generateOptions } from './handler.js';
import { myFunction } from './conversion.js';
const from = document.querySelector('.from-dropbtn');
const to = document.querySelector('.to-dropbtn');
const input = document.querySelector('#currency');

const country = generateOptions(currencies);
from.innerHTML = country;
to.innerHTML = country;
document.getElementById("amount").addEventListener("change", myFunction);
