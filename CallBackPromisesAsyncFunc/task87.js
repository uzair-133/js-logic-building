//simple call back exapmle

// add
// subtract
// multiply


function sum(a,b){
    return a + b;
}
function calculator(a,b,callback){
   return callback(a,b)
}

function subtract(a,b){
    return a - b;
}
function calculator(a,b,callback){
   return callback(a,b)
}


function multiply(a,b){
    return a * b;
}
function calculator(a,b,callback){
   return callback(a,b)
}



console.log(calculator(1,2,sum));
console.log(calculator(5,2,subtract));
console.log(calculator(1,2,multiply));