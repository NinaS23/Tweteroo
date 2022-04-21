import express from "express";
import cors from "cors";

const server = express();
const user =[];
const msg =[];

server.post("/sing-up" , (req,resp)=>{
   if( req.body.username === "" || req.body.avatar === ""){
        req.status(400).send("Todos os campos são obrigatórios!");
        return;
    } else {
        user.body(req.body);
        resp.send("OK")
    }
})

server.post("/tweets", (req, resp) => {
    if (req.body.username === "" || req.body.tweet === "") {
        req.status(400).send("Todos os campos são obrigatórios!");
        return;
    } else {
        msg.push({ tweet: req.body.tweet, username: req.body.username, avatar });
        resp.send("OK")
    }
})

server.get("/tweets",(req,resp)=>{
    const QtdMax = 10;
    
})


server.listen(5000, ()=>{
    console.log("oi")
})