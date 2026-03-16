// express library ko import kar rahe hain
const express = require("express");
// express app create kar rahe hain
const app = express();
const ExpressError = require("./ExpressError");

/* --------------------------------------------------
   Custom Middleware : Token Check
   Ye middleware check karega ki user ne correct token diya hai ya nahi
-------------------------------------------------- */
const checkToken = (req, res, next) => {
    // URL query se token nikal rahe hain
    // example: /api?token=giveaccess
    let { token } = req.query;
    // agar token correct hai
    if (token === "giveaccess") {
        // next() ka matlab → next middleware ya route ko call karo
        next();
    } else {
        // agar token galat hai to error throw kar do
        // ye error error-handling middleware pakad lega
        throw new Error("ACCESS DENIED!");
    }
};

/* --------------------------------------------------
   Route jo intentionally error create karta hai
-------------------------------------------------- */
app.get("/wrong", (req, res) => {
    // yaha variable define nahi hai
    // isliye runtime error generate hoga
    abcd = abcd;
});
/* --------------------------------------------------
   Protected API Route
   Pehle middleware (checkToken) chalega
   fir agar token sahi hua to response milega
-------------------------------------------------- */
app.get("/api", checkToken, (req, res) => {
    // agar token correct hai to data send karega
    res.send("data");

});

/* --------------------------------------------------
   Path Specific Middleware
   Ye sirf /random route par chalega
-------------------------------------------------- */
app.use("/random", (req, res, next) => {

    // console me message print karega
    console.log("I am middleware only for /random route");

    // next route ko call karega
    next();

});

/* --------------------------------------------------
   Normal Routes
-------------------------------------------------- */

// root route
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// random route
app.get("/random", (req, res) => {
    res.send("This is a random page");
});

/* --------------------------------------------------
   Error Handling Middleware
   IMPORTANT → isme 4 parameters hote hain
   (err, req, res, next)
-------------------------------------------------- */
app.use((err, req, res, next) => {
    // console me error message print karega
    console.log("------ ERROR OCCURRED ------");
    console.log(err.message);
    // user ko error response bhej rahe hain
    res.status(500).send("Something went wrong!");

});

/* --------------------------------------------------
   404 Middleware
   Jab koi route match nahi hota
-------------------------------------------------- */
app.use((req, res) => {

    res.status(404).send("Page not found!");

});

/* --------------------------------------------------
   Server start kar rahe hain
-------------------------------------------------- */
app.listen(8080, () => {

    console.log("Server listening on port 8080");

});