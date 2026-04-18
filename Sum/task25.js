//Find the sum of even numbers from 1 to 20.

let sum = 0;
for(let i = 2; i<=20; i++){
    if(i % 2 === 0){
        sum+=i
    }
}
console.log(sum)
