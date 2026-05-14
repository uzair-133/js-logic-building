// Ek function banao:

// function checkNumber(num)

// Rules:

// agar number even ho →
// resolve("Even Number")
// warna →
// reject("Odd Number")

// Phir .then() aur .catch() se handle karo.

function checkNumber(num){
    return new Promise((resolve,reject)=> {
        if(num % 2 === 0){
            resolve("Even Number")
        }
        else{
            reject("Odd Number")
        }
    })

}
checkNumber(2).then((res)=> {
    console.log("Promise Resolved is ",res)
})
.catch((err)=> {
    console.log("Promise Rejected",err)
})