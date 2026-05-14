//fake login


function loginUser(email, password) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (email === "admin@gmail.com") {

        resolve({
          token: "abc123",
          user: "Uzair"
        });

      } else {

        reject("Invalid Credentials");

      }

    }, 2000);

  });

}

loginUser("admin@gmail.com", "12345")
  .then((data) => {
    console.log("Login Success");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


//   async function hello() {
//   return "Hi";
// }

// console.log(hello());