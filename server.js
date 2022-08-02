import  express from "express";

const server=express();
server.listen (3000, console.log("Sevidor rodando na porta 3000..."));
server.get('/',(req,res)=>res.send("Heloo minha tropa!"))
server.get('/users',(rep,res)=>res.send("Pagina de usuários!!"))