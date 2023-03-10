//the purpose of this code is to calculate the number of possible paths
//from the top left corner of an m by n grid to the bottom right corner of the
//grid. You cannot move left, up, or diagonal, only right or down

const gridTraveler = (m,n,memo = {}) =>{
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
    return memo[key];
}

console.log(gridTraveler(3,3))
console.log(gridTraveler(2,3))
console.log(gridTraveler(18,18))
