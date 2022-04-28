const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i = 0; i<=target.length; i++){
        for (let word of wordBank){
            if (target.slice(i,i+word.length) === word){
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }

        }
    }
    return table[target.length];
}

console.log(allConstruct("abc", ["ab", "bc", "ac", "c"]));
console.log(allConstruct("abc", ["ab", "bc", "ac"]));
console.log(allConstruct("ac", ["ab", "bc", "ac", "a", "c"]));
console.log(allConstruct("abc", ["a","b", "c", "ab", "bc"]));