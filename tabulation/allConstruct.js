const allConstruct = (target, wordBank) =>{
    const resArr = Array(target.length+1).fill().map(() => Array());
    resArr[0] = [[]];

    for(let i = 0; i <=target.length; i++){
        for(let word of wordBank){
            if(word === target.slice(i,i+word.length)){
                const newCombos = resArr[i].map((suffix) => [...suffix,word]);
                resArr[i+word.length].push(...newCombos)
            }
        }
    }
    return resArr[target.length]
};

console.log(allConstruct('purple',['purp','p','ur','le','purpl']));
console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(allConstruct('skateboard',['ska','sk','bo','rd','ate','t','boar']));
