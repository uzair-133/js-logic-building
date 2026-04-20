//Find the largest number in an array.

const arr = [3,7,88,9,10];

console.log(Math.max(...arr))

//using reduce method

function LargestNum(arr){
   return arr.reduce((largest,current)=> 
    (current > largest ? current:largest)
    ,arr[0])
}
let num1 = [2,4,66,22,55,4,1];
console.log("the largest number is",LargestNum(num1));

//for loop

function LargestNumber(arr){
    let LargestN = arr[0];
    for(let i = 1; i< arr.length;i++){
        if(arr[i] > LargestN){
            LargestN = arr[i];
        }
    }
    return LargestN;
}

let num2 = [3,7,9,6,10];
console.log(LargestNumber(num2))