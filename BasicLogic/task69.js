//Print numbers that are multiples of 4.

const arr = [2,3,4,5,6,10,12,16,20,12,34,54];

const four = arr.filter((e)=> 
    e % 4 === 0
)
console.log(four)