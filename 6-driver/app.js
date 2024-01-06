function canDrive(age, hasLicence, isDrunk) {
    (age >= 18 && hasLicence && !isDrunk) ? console.log('Может.') : console.log('Не может.');
}

const driver = {
    age: 17,
    hasLicence: true,
    isDrunk: false
}

/* Здесь можно подать в качестве аргумента сразу весь объект, но сделано по условию задания.*/
canDrive(driver.age, driver.hasLicence, driver.isDrunk);