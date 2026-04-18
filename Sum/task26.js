//Find the sum of odd numbers from 1 to 20.

let sum = 0;
for(let i = 1; i<=20; i++){
    if(i % 2 !== 0){
        sum+=i
    }
}
console.log(sum)
