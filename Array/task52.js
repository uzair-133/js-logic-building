//Find the second largest number in an array.


const arr = [2,23,12,16,54,76,34,35,12,43];

//set method remove the duplication of number;
let uni = [...new Set(arr)]
console.log(uni)
//sort tarteeb say karday ga or b - a say wo reverse ho jaye gi
let res = uni.sort((a,b)=> b - a);
// let res = uni.sort((a,b)=> a - b);
console.log(res)
// console.log(res[1])