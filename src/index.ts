require('./db')
import express from "express";
const app=express();

app.get("/",(req,resp)=>{
resp.send("hello world");
});

app.get("/comics",(req,resp)=>{

});


app.listen(8888,()=>{
    console.log("Server started !");
});