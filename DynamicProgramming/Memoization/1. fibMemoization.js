const fibMemoization = (n, memo={}) => {
    if (n in memo) return memo[n];
    if (n == 0) return 0;
    if (n == 1) return 1;

    if ( n >= 2) {
      memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
      return memo[n];
    }
    
}
for (let i=0; i<=50; i++){console.log("Fib of " + i + " is "  +fibMemoization(i));}



/**
 * My First Implementation
 * */

// let num1 = 1;
// let num2 = 1;
// let n = 0;


// function init(){
//     Fibbonaci(50);
// }

// function Fibbonaci(count){
//     n = 0;

//     if(count <= 2){
//         console.log("Fibbonaci:" + 1);
//     }
    
//     else if (count > 2){
//         while (count > 2){
//         n = num1 + num2;
//         num1 = num2;
//         num2 = n;
//         count -=1;
//         }
//         console.log("Fibbonaci:" + n);
//     }
// }
