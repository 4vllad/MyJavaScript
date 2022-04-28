const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0){return true;}
    if (targetSum < 0){return false;}

    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    // for (let i = 0; i<numbers.length; i++){
    //     console.log(numbers[i]);
    // }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(14, [4,15,67,23]));
console.log(canSum(701, [4,15,67,23]));
console.log(canSum(800, [4,15,67,23]));
console.log(canSum(901, [4,15,67,23]));