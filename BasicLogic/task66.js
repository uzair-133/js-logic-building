//Calculate factorial of a number.

const factorial = (number) => {
    if(number < 0){
        console.log("number should be greater than 0:",number)
    }
    if(number === 0 || number === 1){
        return 1
    }
    let result = 1;
    for(let i = 2; i <= number; i++){
        result*=i;
    }
    return result;
}
console.log(factorial(0));