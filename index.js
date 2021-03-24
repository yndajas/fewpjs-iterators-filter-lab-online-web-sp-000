// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}