const fibTabulation = (num) =>{
    let fibArr = Array(num+1).fill(0);
    fibArr[1] = 1;

    for(let i = 0; i <= num; i++){
        fibArr[i+1] += fibArr[i];
        fibArr[i+2] += fibArr[i]

    }
    return fibArr[num];
}

console.log(fibTabulation(6));
console.log(fibTabulation(7));
console.log(fibTabulation(8));
console.log(fibTabulation(50));
