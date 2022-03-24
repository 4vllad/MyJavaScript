const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null){
            const combination = [...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

// m = target sum
// n = numbers.length

//Brute
//time: O(n^m * m)
//space: O(m^2 )

console.log(bestSum(40, [1,2,7,13,15,16]));
// console.log(bestSum(40, [7,14]));
// console.log(bestSum(100, [7,14]));
// console.log(bestSum(300, [7,14]));