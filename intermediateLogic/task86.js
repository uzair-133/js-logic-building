//Remove duplicate elements from an array.


const arr = [3,4,4,6,34,23,24,23];
 
const unique = [...new Set(arr)]
console.log(unique)


const arr2 = [3,4,4,6,34,23,24,23];
 
let u = arr.filter((value,index)=>
  arr.indexOf(value)  === index )

console.log(u)