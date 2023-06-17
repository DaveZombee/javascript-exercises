const fibonacci = function(member) {
    
    if (member <= 0) {
        return "OOPS";
    }

    if (member == 1 || member == 2) {
        return 1;
    }
    
    lastNum = 1;
    currentNum = 1;

    currentMember = 2;

    while (currentMember < member) {
        newNum = lastNum + currentNum;
        lastNum = currentNum;
        currentNum = newNum;
        currentMember++;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
