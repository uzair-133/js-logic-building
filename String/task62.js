//Sort an Array of Strings according to the number of Vowels in them


function Vowels(str){
    let v = "aeiouAEIOU";
    let count = 0;
    for(const char of str){
        if(v.includes(char)){
            count++
        }
    }
    return count
}
const arr = ["uzair", "hello", "world", "javascript"];
arr.sort((a, b) => Vowels(a) - Vowels(b));
console.log(arr);