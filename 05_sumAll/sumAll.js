const sumAll = function(start, end) {
    let sum = 0;
    let first;
    let last;

    if (!Number.isInteger(start) || !Number.isInteger(end) ) {
        return "ERROR"
    } else if (start < 0 || end < 0) {
        return "ERROR"
    } else if (start > end) {
        first = end;
        last = start;
    } else {
        first = start;
        last = end;
    }

    for (let i = first; i < last + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
