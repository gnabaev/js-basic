function crypto(password) {
    const array = Array.from(password);
    const firstPart = array.slice(0, array.length / 2).reverse();
    const secondPart = array.slice(array.length / 2).reverse();
    const securedPassword = firstPart.concat(secondPart).join('');
    return securedPassword;
}

function check(securedPassword, rightPassword) {
    const unsecuredPassword = crypto(securedPassword);
    if (unsecuredPassword == rightPassword) {
        return true;
    }
    return false;
}

console.log(check('owdr', 'word'));
console.log(check('wodr', 'word'));
console.log(check('drow', 'word'));

console.log(check('wqtre', 'qwert'));
console.log(check('eqwtr', 'qwert'));
console.log(check('wtqre', 'qwert'));