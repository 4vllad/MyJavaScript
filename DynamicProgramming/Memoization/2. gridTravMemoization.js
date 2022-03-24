const gridTrav = (m , n, memo={}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if ( m == 0 || n == 0) return 0;
    if ( m == 1 && n == 1) return 1;

    memo[key] = gridTrav(m-1,n, memo) + gridTrav(m,n-1, memo);
    return memo[key];

}

console.log(gridTrav (0,0));
console.log(gridTrav (0,1));
console.log(gridTrav (1,0));
console.log(gridTrav (1,1)); //1
console.log(gridTrav (2,3)); //3
console.log(gridTrav (3,2)); //3
console.log(gridTrav (3,3)); //6
console.log(gridTrav (3,2)); //6
console.log(gridTrav (4,3));
console.log(gridTrav (4,4));
console.log(gridTrav (5,4));
console.log(gridTrav (5,5)); //
console.log(gridTrav (15,15)); //