const fibonacciArr = (n) => {
let arr = [1,1];
if(n == 2) return arr;
if(n == 1) return [1];
if(n <= 0) return [];

for(let i = 0; i < n - 2; i++){
    let num = arr[i] + arr[i+1]
    arr.push(num);
}
return arr;
}

console.log(fibonacciArr(7))
