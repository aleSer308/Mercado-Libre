const express = require("express");
const path = require('path');
const app = express();

app.use(express.static('public'));

let port = process.env.PORT || 3000

app.listen(port, console.log("corriendo por puerto" + port) )


app.get("/", (req, res)=>{

    res.sendFile(path.resolve('views/home.html'));

});
app.get("/login", (req, res)=>{

    res.sendFile(path.resolve('views/login.html'));

});
app.get("/register", (req, res)=>{

    res.sendFile(path.resolve('views/register.html'));

});