const canSumTabulation = (target, nums) =>{
    let resArr = Array(target+1).fill(false);
    resArr[0] = true;
    for(let i = 0; i <= target; i++){
        if(resArr[i] === true){
            for(let num of nums){
                resArr[i+num] = true
            }
        }
    }
    return resArr[target]
}

console.log(canSumTabulation(7,[5,3,4]))
console.log(canSumTabulation(7,[2,4]))
console.log(canSumTabulation(300,[7,14]))
