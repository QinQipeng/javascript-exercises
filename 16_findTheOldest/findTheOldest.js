const findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        let thisYear = (new Date()).getFullYear()
        aLived = (('yearOfDeath' in a) ? a.yearOfDeath : thisYear) - a.yearOfBirth;
        bLived = (('yearOfDeath' in b) ? b.yearOfDeath : thisYear) - b.yearOfBirth;
        return bLived - aLived;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
