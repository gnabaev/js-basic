document.querySelector('.plus').addEventListener('click', function () {
    const number1 = Number(document.querySelector('.number1').value);
    const number2 = Number(document.querySelector('.number2').value);
    if (!number1 && !number2) {
        return;
    }
    document.querySelector('.result').innerText = number1 + number2;

});

document.querySelector('.minus').addEventListener('click', function () {
    const number1 = Number(document.querySelector('.number1').value);
    const number2 = Number(document.querySelector('.number2').value);
    if (!number1 && !number2) {
        return;
    }
    document.querySelector('.result').innerText = number1 - number2;
});

document.querySelector('.multiply').addEventListener('click', function () {
    const number1 = Number(document.querySelector('.number1').value);
    const number2 = Number(document.querySelector('.number2').value);
    if (!number1 && !number2) {
        return;
    }
    document.querySelector('.result').innerText = number1 * number2;
});

document.querySelector('.subtract').addEventListener('click', function () {
    const number1 = Number(document.querySelector('.number1').value);
    const number2 = Number(document.querySelector('.number2').value);
    if (!number1 && !number2) {
        return;
    }
    document.querySelector('.result').innerText = number1 / number2;
});