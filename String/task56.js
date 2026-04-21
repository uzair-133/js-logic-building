//Count the number of vowels in a string.

const Vowels  = (s)=> {
    let v = "aeiouAEIOU";
    let count = 0;
    for(const char of s){
        if(v.includes(char)){
            count++
        }
    }
    return count;
}
const e ="i am uzair . i am a software enginner hahhahh";
console.log(Vowels(e))

//regular expression

const cVowels = (str)=> {
    const m = s.match(/[aeiou]/gi);
    return m ? m.length : 0;
}
const s = "my name is uzair";
console.log(cVowels(s))