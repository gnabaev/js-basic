function convertCurrency(balance, curCurrency, tarCurrency) {
    const exchangeRateUSDRUB = 90;
    if (curCurrency === 'руб' && tarCurrency === '$') {
        balanceInUSD = balance / exchangeRateUSDRUB;
        return balanceInUSD;
    }
    return "Передана неверная валюта";
}

console.log(convertCurrency(1000, 'руб', '$'));