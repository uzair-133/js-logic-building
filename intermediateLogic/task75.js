//Check whether a number is prime.

//A prime number is a whole number greater than 1, which has no positive divisors other than 1 and itself. In other words, prime numbers cannot be formed by multiplying two smaller natural numbers. For example:

//2, 3, 5, 7, 11, and 13 are prime numbers.
//4, 6, 8, 9, and 12 are not prime numbers because they can be divided by numbers other than 1 and themselves.

// let n = 2;
// let isPrime = true;

// if(n <= 1){
//     isPrime = false;
// }
// else{
//     for(let i = 2; i< n; i++){
//         if(n % i === 0){
//             isPrime= false;
//             break;
//         }
//     }
// }
// console.log(isPrime ? `${n} is a prime number` : `${n} is not a prime number`)



//cleaner

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}
let num = 4;

console.log(isPrime(num) ? `${num} is a prime number`: `${num} is not a prime number`);