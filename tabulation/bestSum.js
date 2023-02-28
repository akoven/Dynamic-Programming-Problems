const bestSum = (target, numArr) =>{
    let resArr = Array(target+1).fill(null);
    resArr[0] = [];

    for(let i = 0; i <= target; i++){
        if(resArr[i] !== null){
            for(let num of numArr){
                const currentCombo = [...resArr[i], num];
                if(!resArr[i + num] || currentCombo.length < resArr[i+num].length){
                    resArr[i + num] = currentCombo;
                }
            }
        }
    };
    return resArr[target]
};

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,5,3]));
console.log(bestSum(8,[5,1,4]));
console.log(bestSum(100,[1,2,5,25]));
