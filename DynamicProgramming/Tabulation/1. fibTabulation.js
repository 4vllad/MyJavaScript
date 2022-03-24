const fib = (n) => {
    const fibArray = Array(n + 1).fill(0);
    fibArray[1] = 1;
    for (let i = 0; i<n; i++){
        fibArray[i + 1] += fibArray[i];
        fibArray[i + 2] += fibArray[i];
    }
    return fibArray[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(86));