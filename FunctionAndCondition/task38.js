//Write a function to check if a number is divisible by 10.

function check(num){
    if(num % 10 === 0){
        console.log("the number is div by 10:",num)
    }
    else{
        console.log("the number is not div by 10:",num)
    }
}
check(24);