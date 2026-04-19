//Write a function to check if a number is even or odd.

function EvenOdd(num){
    if(num % 2 === 0 ){
        console.log("is even",num)
    }
    else{
        console.log("is odd",num)
    }
}
EvenOdd(2);

//ternary operator

let number = 3;
number % 2 === 0 ? console.log(`is even ${number}`) : console.log(`is odd ${number}`);