require('./db')
import express from "express";
import Comic from "./model/comic.model";
const app=express();

app.get("/",(req,resp)=>{
resp.send("hello world");
});

app.get("/comics",(req,resp)=>{
Comic.find( (err,comics)=>{
if(err) resp.status(500).send(err);
else resp.send(comics);
} );
});


app.listen(8888,()=>{
    console.log("Server started !");
});