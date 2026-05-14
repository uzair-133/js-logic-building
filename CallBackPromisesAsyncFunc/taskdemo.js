// 3) Fetch Posts After Login

// Problem flow:

// login user
// then fetch posts

// Posts:

// ["Post1", "Post2", "Post3"]

// 👉 Must practice chaining / async flow

// 4) Product API Filter

// Problem:

// ["Phone", "Laptop", "Mouse", "Keyboard"]

// function:

// getProducts(search)

// agar match ho → resolve filtered array
// agar empty → reject "No products found"
// delay: 1 sec
// 5) Payment System Simulation

// Problem:
// makePayment(amount)

// Rules:

// amount > 0 → success "Payment Successful"
// amount <= 0 → fail "Invalid amount"
// delay: 2 sec
// 6) Fake API with Error Handling

// Problem:
// fetchData() banao

// 70% chance success
// 30% chance error
// success → "Data loaded"
// error → "Server error"

// 👉 randomness use karo (Math.random())

// 7) Order Processing Flow (Real-world)

// Steps:

// createOrder()
// processPayment()
// deliverOrder()

// Each step async ho:

// delay: 1 sec each

// 👉 must practice chaining / await flow

// 8) Weather API Simulation

// getWeather(city)

// "Sahiwal" → "Hot 40°C"
// "Lahore" → "Cloudy 35°C"
// else → reject "City not found"
// 9) Timer Simulation

// startTimer(seconds)

// har 1 sec baad log karo:
// 3...
// 2...
// 1...
// then "Done"

// 👉 important for async + loops

// 10) Authentication + Role Check

// Flow:

// loginUser()
// getUserRole()
// allow access or reject

// Roles:

// admin → access granted
// user → limited access
// guest → denied
