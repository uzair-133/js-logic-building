//Check if a string is a palindrome.

const str = "uzair"

if(str === str.split('').reverse().join('')){
    console.log("is palindrome");
}
else{
    console.log("not palindrome")
}

//number

const num = 121;
let numStr = num.toString();
console.log(numStr)
if(numStr === numStr.split('').reverse().join('')){
    console.log("is palindrome",numStr);
}
else{
    console.log("not palindrome",numStr)
}


///another method

function ReverseStr(str){
    let reverse_str = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverse_str+=str[i];
    }
    return reverse_str;
}
function isPalindrome(str){
    reverse_str = ReverseStr(str);
    if(reverse_str === str){
         console.log("passed string is palindrome ");
    }
    else{
        console.log("passed string is not palindrome")
    }
}
let test = "hellolleh";
isPalindrome(test);