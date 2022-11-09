import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import rotas from "./routes/index"

dotenv.config()

const server = express()

server.set('view engine','mustache')
server.set('view', path.join (__dirname,'view'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))

server.use(rotas)

server.listen(process.env.PORT)
server.use((req,res) =>{
    res.send("Página não encontrada")
})