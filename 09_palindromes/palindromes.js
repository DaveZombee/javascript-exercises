const abc123 = "abcdefghijklmnopqrstuvwxyz1234567890"

const palindromes = function (phrase) {
    // Take out punctiation and spaces
    let strippedPhrase = "";
    for (let char of phrase) {
        char = char.toLowerCase();
        if (abc123.includes(char)) {
            strippedPhrase += char;
        }
    }

    // Take out the middle letter if the phrase is an odd length
    if (strippedPhrase.length % 2 == 1) {
        let middle = Math.round(strippedPhrase.length / 2) - 1;
        strippedPhrase = strippedPhrase.slice(0, middle) + strippedPhrase.slice(middle + 1); 
    }

    // Split the phrase in half
    let half =  strippedPhrase.length / 2;
    let firstHalf = strippedPhrase.slice(0, half);
    let secondHalf = strippedPhrase.slice(half, strippedPhrase.length);


    // Reverse the second half
    let secondHalfChars = secondHalf.split("");

    secondHalfChars.reverse();
    secondHalf = '';

    for (const char of secondHalfChars) {
        secondHalf += char;
    }

    // Compare the two halves
    return firstHalf === secondHalf;
};

// Do not edit below this line
module.exports = palindromes;
