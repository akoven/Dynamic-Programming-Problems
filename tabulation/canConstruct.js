const canConstruct = (target, suffixes) =>{
    let targetArr = Array(target.length + 1).fill(false);
    targetArr[0] = true;

    for(let i = 0; i <= target.length; i++){
        if(targetArr[i] === true){
            for(let word of suffixes){
                if(word === target.slice(i, i+word.length)){
                    targetArr[i+word.length] = true;
                }
            }
        }
    }
    return[targetArr[target.length]]
}

console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(canConstruct('skateboard',['ska','sk','bo','rd','ate','t','boar']));
console.log(canConstruct('enterapotentpot',['a','p','ent','enter','ot','o','t']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eeeeee']));
