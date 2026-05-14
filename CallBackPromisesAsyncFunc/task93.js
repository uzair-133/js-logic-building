// 2) Fetch User Profile

// Problem:
// getUser(id) banao

// id = 1 → { id: 1, name: "Ali" }
// else → reject "User not found"
// delay: 1.5 sec


//callback

function getUser(id, callback) {
    setTimeout(() => {
        if (id === 1) {
            callback(null, {
                id: 1,
                name: "ali"
            })
        }
        else {
            callback("User not Found", null)
        }
    }, 1500);
}

function profile(err, data) {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log("success", data)
    }
}
getUser(1, profile)


//promise


function getUserP(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({
                    id: 1,
                    name: "ali"
                })
            }
            else {
                reject("User not Found")
            }
        }, 1500);
    })
}

getUserP(1).then((res) => {
    console.log("Promise Resolved", res)
}).catch((err) => {
    console.log("Promise Rejected", err)
});

//async
function getUserA(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({
                    id: 1,
                    name: "ali"
                })
            }
            else {
                reject("User not Found")
            }
        }, 1500);
    })
}

async function profileId(params) {
    try {
        console.log("Profile is loading....")
        const result = await getUserA(5);
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    }
profileId();