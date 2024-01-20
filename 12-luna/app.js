function isCorrectNumber(cardNumber) {
    let array = [];
    for (let i = 0; i < cardNumber.length; i++) {
        const number = Number(cardNumber[i]);
        if (!isNaN(number)) {
            array.push(number);
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            let multiply = 2 * array[i];
            if (multiply > 9) {
                multiply -= 9;
            }
            array[i] = multiply;
        }
    }

    const sum = array.reduce(function (sum, el) {
        return sum + el;
    }, 0);

    if (sum % 10 === 0) {
        return true;
    }

    return false;
}

const cardNumber = '4561-2612-1234-5464';
console.log(isCorrectNumber(cardNumber));