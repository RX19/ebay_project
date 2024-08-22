import express from "express";
//Fix para __dirname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controller.js"

//server 
const app= express();
app.set("port",3000);
app.listen(app.get("port"));
console.log("servidor corriendo en puerto",app.get("port"));

//Configuracion
app.use(express.static(__dirname + "/public"));
app.use(express.json());


//Rutas
app.get("/index.html",(req,res)=>res.sendFile(__dirname + "public/index.html"));
app.get("/personal.html",(req,res)=>res.sendFile(__dirname + "public/personal.html"));
app.get("/comercial.html",(req,res)=>res.sendFile(__dirname + "public/comercial.html"));
app.get("/landingpage.html",(req,res)=>res.sendFile(__dirname + "public/landingpage.html"));
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);
