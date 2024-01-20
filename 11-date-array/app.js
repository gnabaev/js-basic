function modifyDates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const parsedDate = Date.parse(array[i]);
        if (!isNaN(parsedDate)) {
            const newDate = new Date(parsedDate).toLocaleString('ru-RU', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }).split('.').join('-');
            newArray.push(newDate);
        }
    }
    return newArray;
}

console.log(modifyDates(['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023']));