import express from "express";
import exphbs from "express-handlebars";
import path from 'path';
import _routes from "./routes";
import cors from "cors";

//init
const app = express();
import './common/conn'

//settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join( app.get('views'), 'layouts'),
    partialsDir: path.join( app.get('views'), 'partials'),
    //helpers: path.join(__dirname, 'common', 'helper')
    helpers: require('./common/helper'),
    defaultLayout: 'main'
}));

app.use(cors());

app.set('view engine', '.hbs');

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

