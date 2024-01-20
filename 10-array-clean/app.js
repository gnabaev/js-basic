const func = (num) => num === 7;

function filterArray(array, func) {

    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!func(array[i])) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

const res = filterArray([2, 4, 5, 7], func);
console.log(res);