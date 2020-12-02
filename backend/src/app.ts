import express from "express";
import path from 'path';
import _routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//init
const app = express();
import './lib/conn';

//settings
app.set('port', process.env.PORT || 3001);
app.use(cors());

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use( _routes );

//Static files
app.use(express.static( path.join( __dirname, 'public')));


//Start server

app.listen(app.get('port'), () => {
    console.log(`corriendo en el puerto ${app.get('port')}`);    
})

