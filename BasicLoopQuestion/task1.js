//multiple 2 number ranges 1 to 50  answer equal to 500

for(let i = 1; i<=50; i++){
    for(let j = 1; j<=50; j++){
        if(i * j === 500){
            console.log(`the number is ${i} X ${j} = 500`)
        }
    }
}