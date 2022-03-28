const from = document.querySelector('.from-dropbtn');
const to = document.querySelector('.to-dropbtn');
const input = document.querySelector('#currency');

const country = generateOptions(currencies);
from.innerHTML = country;
to.innerHTML = country;

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join("");
}