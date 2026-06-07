const factorial = function(n) {
    if (!Number.isInteger(n) || n < 0) return undefined


    return n == 0 ? 1 : factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = factorial;