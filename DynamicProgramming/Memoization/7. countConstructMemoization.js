const countConstruct = (target, wordBank, memo={}) =>{
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};
//m = target.length
//n = wordBank.length

//Brute Force

//time: O(n^m*m)
//space: O(m^2)

//memoized

//time: O(n*m^2)
//space: O(m^2)


console.log(countConstruct("tree", ["tr", "e", "tree"]));
console.log(countConstruct("tree", ["tr", "e", "tree","t"]));
console.log(countConstruct("tree", ["tr", "e", "tree","t","r"]));