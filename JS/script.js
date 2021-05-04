let formElement = document.querySelector(".js-container__form");
let resultElement = document.querySelector(".js-container__result");
let amountElement = document.querySelector(".js-form__amount");
let currencyElement = document.querySelector(".js-form__currency");

let rateEUR = 4.5523;
let rateUSD = 3.7902;
let rateGBP = 4.1415;
let rateCHF = 5.2600;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateGBP;
            break;
            
        case "GBP":
            result = amount / rateGBP;
            break;

        case "CHF":
            result = amount / rateGBP;
            break;            
    }

    resultElement.innerHTML = `<strong>${amount} ZŁ = ${result.toFixed(2)} ${currency}</strong>`;
});




