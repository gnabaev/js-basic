function getDistance(positionLat, positionLong, addressLat, addressLong) {
    return Math.sqrt(Math.pow((addressLat - positionLat), 2) + Math.pow((addressLong - positionLong), 2));
}

console.log(getDistance(34, 43, 54, 87));