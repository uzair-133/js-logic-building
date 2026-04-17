//Count how many even numbers exist between 1 and 50.

let count = 0;
for(let i =2; i<=50; i++){
    if(i % 2 === 0){
        count++
    }
}
console.log(count)