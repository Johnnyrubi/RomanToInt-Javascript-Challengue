const romanToInt = (roman) => {
    if (roman === null) {
        return false
    }
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let numeroAnterior = 0;

    for (let i = 0; i < roman.length; i++) {
        if (!romanNumbers[roman[i]] || !String(roman[i])) {
            continue
        }
        numeroAnterior += romanNumbers[roman[i]];
    }
    return numeroAnterior;
};

console.log(romanToInt("123"))

module.exports = romanToInt;
