// Real Callback Example

// Maan lo tum bank app bana rahe ho.

// User login karta hai → login successful hone ke baad dashboard open karna hai.


function UserLogin(email,password,callback){
    console.log('checking user....');
    setTimeout(() => {
        console.log("user logged in ....")

        callback({
            id:1,
            email:email
        })
    }, 2000);
}

function getUserData(user){
console.log("user data")
console.log(user)
}
UserLogin("uzair247malik@gmail.com", "12345",getUserData)