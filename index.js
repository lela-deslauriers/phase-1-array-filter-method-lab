

function findMatching(drivers, name) {
    let matchingNames = drivers.filter(record => record.toLowerCase() === name.toLowerCase());
    return  matchingNames;
}

function fuzzyMatch(drivers, name) {
    let matchingNames = drivers.filter(record => record.toLowerCase().startsWith(name.toLowerCase()))
    console.log(drivers);
    return  matchingNames;
}

function matchName(drivers, name) {
    let matchingNames = drivers.filter(record => record.name.toLowerCase() === name.toLowerCase());
    return  matchingNames;
}


/*
function findMatching(name) {
    return drivers.find(driver => driver.name === name);
}
*/

//The above function meeds to take an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.