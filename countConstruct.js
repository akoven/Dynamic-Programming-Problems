const countConstruct = (target, wordBank,memo ={}) =>{
    let count = 0;
    if(target === '') return 1;
    if(target in memo) return memo[target]

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const runningTotal = countConstruct(suffix,wordBank,memo);
            count += runningTotal;
        };
    };
    memo[target] = count;
    return count
}

console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(countConstruct('skateboard',['ska','sk','bo','rd','ate','t','boar']));
console.log(countConstruct('enterapotentpot',['a','p','ent','enter','ot','o','t']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eeeeee']));
