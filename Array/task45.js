//Find the smallest number in an array.

// const arr = [8,9,45,76,0,4,6];

// console.log(Math.min(...arr))

//reduce
function Min(arr){
    return arr.reduce((min,curr)=> 
    (curr < min ? curr : min)
    ,arr[0])
}
const num1 = [6,9,4,7,9,10];
console.log(Min(num1))

//for loop

function Minimum(arr){
    let Mini = arr[0];
    for(let i = 1; i < arr.length;i++ ){
        if(arr[i] < Mini ){
        Mini = arr[i]
        }
    }
    return Mini
}

const num2 = [3,6,4,1,4,0,6,4,2];
console.log("the minimum number is:",Minimum(num2))