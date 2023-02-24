const howSumTabulation = (target, numArr) =>{
    const resArr = Array(target+1).fill(null)
    resArr[0] = [];

    for(let i = 0; i <= target; i++){
        if(resArr[i] != null){
            for(let num of numArr){
                resArr[i+num] = [...resArr[i],num]
            }
        }
    }

    return resArr[target]
};

console.log(howSumTabulation(7,[5,3,4]))
console.log(howSumTabulation(7,[5,3,4,7]))
console.log(howSumTabulation(7,[2,4]))
console.log(howSumTabulation(8,[5,3,2]))
