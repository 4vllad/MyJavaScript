const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i=0; i <= target.length; i++){
        if (table[i] === true){
            for (let word of wordBank){
                if (target.slice(i, i + word.length) === word){
                    //table[i + word.length] == [...table[i], word]
                    table[i + word.length] = true;
                }
                
            }
        }
    }
    return table[target.length];
}

//console.log(canConstruct("abc", [ab, bc, ac, c]));
console.log(canConstruct("abc", ["ab", "bc", "ac", "c"]));
console.log(canConstruct("abc", ["ab", "bc", "ac"]));
console.log(canConstruct("ac", ["ab", "bc", "ac"]));