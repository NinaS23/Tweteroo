import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
const user =[];
const tweet =[];

server.post("/sign-up" , (req,resp)=>{
   if( req.body.username === "" || req.body.avatar === ""){
        resp.status(400).send("Todos os campos são obrigatórios!");
        return;
    } else {
       const users = req.body
        user.push(users);
        resp.status(201).send("OK")
    }
})

server.post("/tweets", (req, resp) => {
    if (req.body.username === "" || req.body.tweet === "") {
        resp.status(400).send("Todos os campos são obrigatórios!");
        return;
    } else {
        tweet.push({ tweet: req.body.tweet, username: req.body.username, avatar });
        resp.send("OK")
    }
})

/* server.get("/tweets",(req,resp)=>{
    const QtdMax = 10;
    const pageTweteroo = req.body.page;//aqui fiz uma req do tipo bodyt pra page
    if(pageTweteroo > QtdMax){
        
    }
}) */


server.listen(5000, ()=>{
    console.log("oi")
})


/* 
filtrando apenas os 10 ultimos tweets

1- primeiro , tem que havar uma page que irá ter todos os tweets , todos (sem filtrar)
2- depois , filtrar eles : se a page tiver mais do que 10 tweets , fazer um desctruturing de tweets e add, apenas 10 ultimos
*/