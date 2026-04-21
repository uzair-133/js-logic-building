//Find the sum of numbers in an array.

const arr = [24,5,7,9,12,13,14,54,57,6,8,10];

let sum = arr.reduce((acc,curr)=> {
   return acc + curr;
},0)

console.log(sum);