import express, { Request, Response } from "express";
export default class Server{
    constructor(private port:number){        
    }
    public start() : void{
        const app=express();
        app.get("/",(req:Request,resp:Response)=>{
            resp.send("hello Express ");
        });
        app.listen(this.port,()=>console.log("Server started"));
    }
}