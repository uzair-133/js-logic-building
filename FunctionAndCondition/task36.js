//Write a function to find the largest of three numbers.

function Larger(num1,num2,num3){
    if(num1 > num2 && num1 > num3 ){
      console.log(`the ${num1} is greater than ${num2} and ${num3}`)
    }
    else if(num2 > num1 && num2 > num3){
      console.log(`the ${num2} is greater than ${num1} and ${num3}`)
    }
    else{
      console.log(`the ${num3} is greater than ${num1} ${num2}`)
    }
}
Larger(3,32,100)