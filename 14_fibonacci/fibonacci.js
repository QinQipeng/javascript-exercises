
function recur_fib (num){
    if (num <= 1) return num;
    return recur_fib(num - 1) + recur_fib(num - 2);
}

const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    num = parseInt(num);
    return recur_fib(num);
};

// Do not edit below this line
module.exports = fibonacci;
