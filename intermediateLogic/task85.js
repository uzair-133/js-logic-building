//Find duplicate numbers in an array.

const arr = [3,4,4,6,34,23,24,23];
 
let dupli = arr.filter((value,index)=>
  arr.indexOf(value)  !== index && arr.lastIndexOf(value) === index)

console.log(dupli)
