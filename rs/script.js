{
    const calculateResult = (currency, amount) => {

        const rateEUR = 4.5523;
        const rateUSD = 3.7902;
        const rateGBP = 4.1415;
        const rateCHF = 5.2600;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;
        }
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-container__result");
        resultElement.innerHTML = `<strong>${amount} ZŁ = ${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-form__amount");
        const currencyElement = document.querySelector(".js-form__currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, amount);

        updateResultText(amount, result, currency);
    };

    const init = () => {

        const formElement = document.querySelector(".js-container__form");

        formElement.addEventListener("submit", onFormSubmit)
    }
    init();
}
