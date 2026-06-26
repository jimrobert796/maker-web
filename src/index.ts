import express from "express";  // Importacion normal de js

const app = express(); // Inicalizacion de variable/Objeto
const PORT = 5000; // Puerto localhost:5000

// Excepcion de typescript para ignorar un parametro _req
app.get('/', (_req, res) =>{
    console.log(`Someone is already here -> ${new Date().toLocaleDateString()}`);
    res.send("Hello es una prueba rapida sobre el uso Typescript con node")   
});

// Listener levantamiento de app
app.listen(PORT, ()=>{
    console.log("The Server is running on porto: "+ PORT)
});