// 1) Fake Login System

// Problem:
// loginUser(email, password) banao

// valid: "admin@gmail.com" + "1234"
// success → { user: "Admin", token: "abc123" }
// fail → "Invalid credentials"

// 👉 delay: 2 sec
//callback
function loginUserC(email,password,callback){
    setTimeout(() => {
        if(email === "admin@gmail.com" && password===1234){
        callback(null,{
            user:"Admin",
            token:"abc123"
        })
        }
        else{
            callback("invalid credential",null);
        }
        
    }, 2000);
}
function successData(err,data){
if (err) {
    console.log("Error:", err);
  } else {
    console.log("Success:", data);
  }
}
loginUserC("admin@gmail.com",1234,successData)

//promise 
function loginUser(email,password){
return new Promise((resolve,reject)=> {
    setTimeout(() => {
        if(email === "admin@gmail.com" && password===1234){
         resolve({
            user: "admin",
            token:"abc123"
        })
        }
        else{
            reject("invalid credential");
        }
        
    }, 2000);
})
}
loginUser("admin@gmail.com",1234)
.then((res)=> {
    console.log(res)
})
.catch((err)=> {
    console.log(err)
})


//async function

function loginUserA(email,password){
return new Promise((resolve,reject)=> {
    setTimeout(() => {
        if(email === "admin@gmail.com" && password===1234){
         resolve({
            user: "admin",
            token:"abc123"
        })
        }
        else{
            reject("invalid credential");
        }
        
    }, 2000);
})
}
async function login() {
    const result = await loginUserA("admin@gmail.com",1234)
    console.log(result)
}
login()