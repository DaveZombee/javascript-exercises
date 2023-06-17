const reverseString = function(phrase) {
    let chars = phrase.split("");
    chars.reverse();
    let result = '';

    for (let char of chars) {
        result += char;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
