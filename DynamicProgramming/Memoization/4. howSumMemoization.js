const howSum = (targetSum, numbers, memo={}) =>{
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null){
            memo[targetSum] = [ ...remainderResult, num ];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
};
console.log(howSum(40, [1,7,14]));
console.log(howSum(40, [7,14]));
console.log(howSum(100, [7,14]));
console.log(howSum(300, [7,14]));


//m = target sum
//n = numbers.length
//
// Brute Force
// time: O(n^m * m)
// space O(m)
// Memoized
// time: O(n*m*^2)
// space O(m^2)