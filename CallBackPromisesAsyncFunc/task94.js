// 3) Fetch Posts After Login

// Problem flow:

// login user
// then fetch posts

// Posts:

// ["Post1", "Post2", "Post3"]

// 👉 Must practice chaining / async flow


//callback
function LoginUser(email,password,callback){

    setTimeout(() => {
        if(email === "admin@gmail.com" && password===1234){
            callback(null,{
                id:1,
                user:"admin"
            })
        }
        else{
            callback("invalid credential",null)
        }
    }, 2000);
}


function getPosts(id,callback){

    setTimeout(() => {
      callback(null,[
        "Post1",
        "Post2",
        "Post3"
      ])
    }, 1500);
}

LoginUser("admin@gmail.com",1234,(err,data)=>{
if(err){
    console.log(err)
}
else{
    console.log("User is logging....")
    console.log("Login Success",data);
    getPosts(data.id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
             console.log("post....")
            console.log("Posts",data)
        }
    })
}
})

//Promise

function LoginUserP(email,password){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(email === "admin@gmail.com" && password===1234){
            resolve({
                id:1,
                user:"admin"
            })
        }
        else{
            reject("invalid credential")
        }
    }, 2000);
    })
}


function getPostsP(id){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve([
        "Post1",
        "Post2",
        "Post3"
      ])
    }, 1500);
})
}

LoginUserP("admin@gmail.com",1234)
.then((res)=>{
console.log("User is logging....")
console.log("Login Success",res);
return getPostsP(res.id)
})
.then((posts)=>{
    console.log("post....")
    console.log("Posts",posts)
})
.catch((err)=>{
    console.log(err)
})


//async await

function LoginUserA(email,password){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(email === "admin@gmail.com" && password===1234){
            resolve({
                id:1,
                user:"admin"
            })
        }
        else{
            reject("invalid credential")
        }
    }, 2000);
    })
}


function getPostsA(id){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve([
        "Post1",
        "Post2",
        "Post3"
      ])
    }, 1500);
})
}
async function detail() {
    try{
        console.log("user is loging...")
        const result = await LoginUserA("admin@gmail.com",1234)
        console.log(result)
        console.log("post is loading....")
        const Post = await getPostsA(result.id)
        console.log(Post)
    }
    catch(err){
        console.log(err)
    }
}
detail()