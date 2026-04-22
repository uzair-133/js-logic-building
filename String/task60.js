//Count how many words exist in a string.

function countWords(str){
let count = 0;
if(str.trim().length === 0){
    return 0
}
const lines = str.trim().split(/\s+/)
return lines.length;
}
let a = "uzair ahmad is a software enginner";
console.log("number of words:",countWords(a))



// function countWords(str) {
//     let count = 0;
//     let inWord = false;

//     for (let i = 0; i < str.length; i++) {
//         if (!/\s/.test(str[i]) && !inWord) {
//             count++;
//             inWord = true;
//         } 
//         else if (/\s/.test(str[i])) {
//             inWord = false;
//         }
//     }

//     return count;
// }
