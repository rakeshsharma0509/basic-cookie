const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
const port=3000;


//middleware
app.use(cookieParser());


//routes 

app.get("/", (req, res)=>{
    res.send("<h1> hello </h1>");
});

app.get('/cookie', (req, res)=>{
    // res.setHeader("set-cookie", "food=bard"); //set-cookie he dena padega first value to set cookies
    // res.send("cookie is set manually");

    // res.cookie('foo', 'bar'); // takes 3 arg (name , value, options for cookie in key value pair)
    // setting cookies with options
    res.cookie("foo1", "bar",{
        // expires: new Date() same as ,maxAge but takes date as value
        // maxAge: 5000 // takes milliseconds after which cookie should expire and gone
        // httpOnly: true it makes cookies unaccesable vy wirting js in client side or browser like console
        // secure: true  cookie will be set on https only 
        // domain : "www.asdas.com" the cookie will be valid for that domain and its sub domain.
    });
    res.send("cookie set automatically");
});

app.get("/getCookie", (req, res)=>{
        res.send(req.cookies);
});

app.get("/delete", (req, res)=>{
    res.clearCookie("foo1"); // arg give name of the cookie you want to delete
    res.send("cookie gone");
});





// port listening
app.listen(port,()=>{
    console.log("server is listening");
});