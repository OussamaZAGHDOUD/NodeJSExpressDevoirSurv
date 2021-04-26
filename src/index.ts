require('./db')
import express, { Request, Response } from "express";
import Comic from "./model/comic.model";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req:Request,resp:Response)=>{
resp.send("hello world");
});

app.get("/comics",(req,resp)=>{
Comic.find( (err,comics)=>{
if(err) resp.status(500).send(err);
else resp.send(comics);
} );
});

app.get("/comics/:id",(req:Request,resp:Response)=>{ 
    Comic.findById(req.params.id,(err:Error,comic: any)=>{
    if(err) resp.status(500).send(err);
    else resp.send(comic);
    } );
    });


app.post("/comics",(req,resp)=>{
    let comic= new Comic(req.body);
    comic.save(err=>{
        if(err) resp.status(500).send(err);
        else resp.send(comic);
    })  ;  
});

app.put("/comics/:id",(req,resp)=>{
  Comic.findByIdAndUpdate(  req.params.id,req.body,(err,comic)=>{
        
        if(err) resp.status(500).send(err);
        else resp.send(comic);
    })  ;  
});

app.delete('/comics/:id',  async (req, resp) => {
    const _id = req.params.id;
    try {
     const comic = await Comic.findByIdAndDelete(_id);
     if (!comic) return resp.status(404).send("Comic with this id is not found !");
     return resp.send(comic);
    } catch (e) {
     return  resp.status(200).send("Comic deleted succeslully");
    }
   });

   // GET http://localhost:8888/pcomics?page=1?&size=2
   app.get("/pcomics",(req:Request,resp:Response)=>{
   
    let page:string = req.query.page as string ;
    let size:string = req.query.size as string ;
   
    let p:number=parseInt(page || '1');
    let s:number=parseInt(size || '5');
    console.log(p);
    console.log(s);
    Comic.paginate({},{page:p, limit:s},(err,books)=>{
        if(err) resp.status(500).send(err);
        else resp.send(books);
    });
});


 // GET http://localhost:8888/comics-search?kw=page=1&size=2
 app.get("/comics-search",(req:Request,resp:Response)=>{
   
    let page:string = req.query.page as string ;
    let size:string = req.query.size as string ;
    let kw:string = req.query.kw as string ;

    let p:number=parseInt(page || '1');
    let s:number=parseInt(size || '5');
    let k:string=kw || '5';

    Comic.paginate({title:{$regex:".*(?i)"+kw+".*"}},{page:p, limit:s},(err,books)=>{
        if(err) resp.status(500).send(err);
        else resp.send(books);
    });
});
app.listen(8888,()=>{
    console.log("Server started !");
});