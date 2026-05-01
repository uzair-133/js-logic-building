//Implement FizzBuzz from 1 to 50.

//multiple of 3 is fizz and multiple of 5 is buzz and multiple of both is fizzbuzz

let n = 50; 
for(let i = 1; i<=n;i++){
       
    if(i % 15 === 0 ){
        console.log("fizzbuzz");
       
    }
    else if(i % 3 === 0){
         console.log("fizz");
    }
    else if(i % 5 === 0){
          console.log("buzz")
    }
    else{
        console.log(i)
    }
}









// let fizzBuzz = function (n) {

//     const arr = []
//     for (i = 1; i <= n; i++) {
//         if (i % 15 === 0) arr.push("FizzBuzz")
//         else if (i % 3 === 0) arr.push("Fizz")
//         else if (i % 5 === 0) arr.push("Buzz")
//         else arr.push(i.toString())
//     }
//     return arr

// };
// console.log(fizzBuzz(50))