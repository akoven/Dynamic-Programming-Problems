const canSum = (targetSum, nums, memo = {}) =>{

    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of nums){
        const remainder = targetSum - num;
        if(canSum(remainder,nums, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    };
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7,[2,3]))
console.log(canSum(7,[2,4]))
console.log(canSum(8,[2,3,5]))
console.log(canSum(700,[14,28]))
