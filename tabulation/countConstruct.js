const countConstruct = (target, suffix) =>{
    const resArr = Array(target.length+1).fill(0);
    resArr[0] = 1;

    for(let i = 0; i <=target.length; i++){
        for(let word of suffix){
            if(word === target.slice(i,i+word.length)){
                resArr[i+word.length] += resArr[i];
            }
        }
    }

    return resArr[target.length]

};

console.log(countConstruct('purple',['purp','p','ur','le','purpl']));
console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(countConstruct('skateboard',['ska','sk','bo','rd','ate','t','boar']));
