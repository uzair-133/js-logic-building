//fake api 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        if (!res.ok) {
            throw new Error("Api Error");
        }
        return res.json();
    })
    .then((data) => {
     console.log(data)
    })
    .catch((err)=> {
        console.log(err)
    })