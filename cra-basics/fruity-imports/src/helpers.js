function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function find(array, element) {
    for(let i=0; i<array.length; ++i) {
        if(array[i]===element) return i;
    }
    return null;
}

function remove(array, element) {
    let elementPosition = find(array, element);
    let spliceResult = array.splice(elementPosition, 1);

    if(spliceResult.length===1) {
        return spliceResult[0];
    } else {
        return undefined;
    }
}

export { choice, remove };