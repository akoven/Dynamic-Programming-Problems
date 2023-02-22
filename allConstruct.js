const allConstruct = (target, wordBank, memo = {}) =>{
    if(target === '') return [[]];
    if(target in memo) return memo[target];

    let result = [];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixArr = allConstruct(suffix,wordBank, memo);
            const targetArr = suffixArr.map(way => [word, ...way]);
            result.push(...targetArr);
        };
    };

    memo[target] = result;
    return result
};

console.log(allConstruct('purple', ['purp','p','ur','le','purpl']))
