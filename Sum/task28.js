//Find the average of numbers in an array.

const arr = [2,4,3,5,6,7];

const sum = arr.reduce((acc,curr)=> {
    return acc + curr;
})

const average  = sum / arr.length;
console.log(average)