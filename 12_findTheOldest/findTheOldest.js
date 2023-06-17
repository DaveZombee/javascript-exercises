const findTheOldest = function(people) {
    let ages = people.map(getAge);
    let maxAge = Math.max(...ages);
    let maxIndex = ages.indexOf(maxAge);

    return people[maxIndex];
};

const getAge = function(person) {
    if (person.yearOfDeath === undefined) {
        let currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
