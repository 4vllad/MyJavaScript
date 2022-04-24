const arrayTest = (word) => {
    //Pro
    for (let char of word){
        console.log(char);
    }
    //Ok
    for (let char in word){
        console.log(word[char]);
    }
    //Noob
    for (let i=0; i<word.length; i++){
        console.log(word[i]);
    }
    //Don't
    while(j=0,j<word.length, j++){
        console.log(word[j]);
    }

    return word;
}

console.log(arrayTest("what"));