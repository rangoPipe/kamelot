import mongoose from 'mongoose';
import { constantes } from './constants';

mongoose.connect(constantes.urlDB, {
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => {
    console.log('is connected');
})
.catch(err => {
    console.log('error to connect');
    console.log(process.env);
    
})