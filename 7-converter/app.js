function convertCurrency(balance, curCurrency, tarCurrency) {
    exchangeRateUSDRUB = 90;
    if (curCurrency == 'руб' && tarCurrency == '$') {
        balanceInUSD = balance / exchangeRateUSDRUB;
        return balanceInUSD
    }
    return null;
}

console.log(convertCurrency(1000, 'руб', '$'));