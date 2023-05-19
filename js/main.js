const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const exchangeBtn = document.querySelector('.app__body--swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
    .then(response => response.json())
    .then(data => {
    const currency1 = currencyOne.value;
    const currency2 = currencyTwo.value;
    const rate = data.rates[currency2];
    rateInfo.textContent = `1 ${currency1} = ${rate} ${currency2}`;
    console.log(amountOne.value);
    console.log(rate);
    amountTwo.value = (amountOne.value * rate);
    console.log(amountTwo.value = (amountOne.value * rate).toFixed(4));
  });
}

const swap = () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
}

  currencyOne.addEventListener('change', calculate);
  currencyTwo.addEventListener('change', calculate);
  amountOne.addEventListener('input', calculate);
  exchangeBtn.addEventListener('click', swap);

  calculate();