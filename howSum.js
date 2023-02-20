const howSum = (targetSum, numbers, memo = {}) =>{
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(targetSum in memo) return memo[targetSum];

    for (let num of numbers){
        const remainder = targetSum - num;
        const resRemainder = howSum(remainder, numbers);
        if(resRemainder !== null){
            memo[targetSum] = [...resRemainder, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}
