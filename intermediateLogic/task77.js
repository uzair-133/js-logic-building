//Print first 10 Fibonacci numbers.


let n = 10;

let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}









//sum
// function fibonacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     if (num === 1) {
//         return num1;
//     } else if (num === 2) {
//         return num2;
//     } else {
//         for (let i = 3; i <= num; i++) {
//             sum = num1 + num2;
//             num1 = num2;
//             num2 = sum;
//         }
//         return num2;
//     }
// }

// console.log("Fibonacci(10): " + fibonacci(10));