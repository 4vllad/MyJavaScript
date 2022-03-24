const howSum = ( targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainder !== null) { //remainder! Should be remainderResult
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    
    memo[targetSum] = null;
    return null;
};

console.log(howSum(40, [7,14]));