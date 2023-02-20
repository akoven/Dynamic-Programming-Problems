const fibonacci = (n,memo={}) =>{

    if(n in memo) return memo[n];
    if(n===1) return 1;
    if(n <= 0) return 0;

    memo[n] = fibonacci((n-2),memo) + fibonacci((n-1),memo);
    return memo[n]
}

console.log(fibonacci(7))
console.log(fibonacci(20))
console.log(fibonacci(50))
