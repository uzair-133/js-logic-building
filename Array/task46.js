//Count how many even numbers exist in an array.

const arr = [24,5,7,9,12,13,14,54,57,6,8,10];
let count = 0;

arr.map((e)=> {
    if(e % 2 === 0){
        count++
    }
})
console.log(count);