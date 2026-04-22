//Count the number of consonants in a string.



const isConsonent = (ch) => {
    ch = ch.toUpperCase();
    console.log(ch)

    return (
        !(ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") && ch.match(/[A-Z]/i)
    );
}

function totalConsonent(str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (isConsonent(str[i])) {
            count++
        }
    }
    return count
}

var str = "uzair";
console.log(totalConsonent(str));





