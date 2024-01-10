function sort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let flag = false;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                flag = true;
            }
        }
        if (flag == false) {
            return array;
        }
    }
    return array;
}

console.log(sort([4, 7, 2, 5]));