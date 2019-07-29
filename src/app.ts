import express from "express";

//init
const app = express();

//settings
app.set('port', 3000);
//Middlewares

//Routes

//Static files

//Start server

app.listen(app.get('port'), () => {
    console.log(`corriendo en el puerto ${app.get('port')}`);    
})