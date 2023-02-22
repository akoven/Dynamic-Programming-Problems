/*the canConstruct function takes in a target string and an array of strings
the function should return a boolean indicating whether or not the target
can be constructed by concatenating elements of the wordBank array.
Elements of wordBank can be used as many times as needed.
*/

const canConstruct = (target, wordBank,memo={}) =>{
    if(target.length === 0) return true;
    if(target in memo) return memo[target];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
           const suffix = target.slice(word.length);
           if(canConstruct(suffix,wordBank, memo) === true){
                memo[target] = true;
                return true;
           }
        };
    }

    memo[target] = false;
    return false;

}

console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(canConstruct('skateboard',['ska','sk','bo','rd','ate','t','boar']));
console.log(canConstruct('enterapotentpot',['a','p','ent','enter','ot','o','t']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eeeeee']));
