const bestSum = (target, nums, memo={}) =>{
    if(target === 0) return [];
    if(target < 0) return null;
    if(target in memo) return memo[target];

    let shortestCombo = null;

    for(let num of nums){
        const remainder = target - num;
        const remainderCombo = bestSum(remainder, nums, memo);
        if(remainderCombo !== null){
            const combination = [...remainderCombo, num]
            if(shortestCombo === null || combination.length < shortestCombo.length){
                shortestCombo = combination
            }
        }
    };

    memo[target] = shortestCombo;
    return shortestCombo;
};


console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(100,[1,2,5,25]));
