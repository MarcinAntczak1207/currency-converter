let formElement = document.querySelector(".js-container__form");
let resultElement = document.querySelector(".js-container__result");
let amountElement = document.querySelector(".js-form__amount");
let rateElement = document.querySelector(".js-form__rate");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let rate = rateElement.value;

    let result = amount * rate;

    resultElement.innerText = result;
})




