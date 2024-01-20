function objectToQueryString(object) {
    const keyNames = Object.keys(object);
    return `${keyNames[0]}=${object.search}&${keyNames[1]}=${object.take}`;
}

const user = {
    search: 'Вася',
    take: 10
}

console.log(objectToQueryString(user));
