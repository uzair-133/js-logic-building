//Remove spaces from a string.

let str = "  uzair ahmad    ";
let t = str.trim();
let r = str.replaceAll(" ","")

console.log(t);
console.log(r)



function removeSpaces(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }

    return result;
}