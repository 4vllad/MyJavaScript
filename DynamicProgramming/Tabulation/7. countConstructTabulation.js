const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i<=target.length; i++){
            for(let word of wordBank){
                if (target.slice(i, i + word.length) === word){
                    table[i + word.length] += table[i];
                }
            }
    }
    return table[target.length];
};

console.log(countConstruct("abc", ["ab", "bc", "ac", "c"]));
console.log(countConstruct("abc", ["ab", "bc", "ac"]));
console.log(countConstruct("ac", ["ab", "bc", "ac"]));
console.log(countConstruct("abc", ["a","b", "c", "ab", "bc"]));