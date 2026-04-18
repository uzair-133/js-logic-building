//Find the sum of digits of a number.

let digit = 123;
let ar = digit.toString().split("").map(Number)
let sum = ar.reduce((acc,curr)=> {
    return acc + curr;
})
console.log(sum)