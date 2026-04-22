//Reverse a string.


const str = "hey bro"

const rev = str.split('').reverse().join('');
console.log(rev);

//for loop imp

let st = "javascript";
let reversveString = '';

for(let i = st.length - 1; i >= 0; i--){
    reversveString+=st[i]
}
console.log(reversveString)