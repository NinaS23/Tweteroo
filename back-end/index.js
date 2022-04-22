import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
const users =[];
const tweet = [{
    username: "bobesponja",
    tweet: "eu amo o hub",
    
}];

server.post("/sign-up", (req, resp) => {
    const user = req.body
    if (user.username === "" || user.avatar === "") {
        resp.status(400).send("Todos os campos são obrigatórios!");
    } else {
        users.push(user);
        resp.status(201).json("OK")
    }
})

server.post("/tweets", (req, resp) => {
    if (req.body.username === "" || req.body.tweet === "") {
        resp.status(400).send("Todos os campos são obrigatórios!");
       
    } else {
        tweet.push({ tweet: req.body.tweet, username: req.body.username, avatar });
        resp.status(201).send("OK")
    }
})

server.get("/tweets",(req,resp)=>{
    const QtdMax = 10;
    const page =[];
   for(let i =0; i < QtdMax;i++){
       page.push(tweet[i])

   }
   resp.status(201).send(page)
}) 


server.listen(5000, ()=>{
    console.log("oi")
})


/* 
filtrando apenas os 10 ultimos tweets

1- primeiro , tem que havar uma page que irá ter todos os tweets , todos (sem filtrar)
2- depois , filtrar eles : se a page tiver mais do que 10 tweets , fazer um desctruturing de tweets e add, apenas 10 ultimos

@@ arranjar um jeito de colocar o avatar(img)no obj user no get; e cospe tudo isso na resp
*/