import mongoose, { mongo } from "mongoose";


const schProduct = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
    idProveedor : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    ean  : {
        type: String,
        required: true,
        unique: true
    },
    costBuy: Number,
    costSale: Number,
    dateCreate : {
        type : Date,
        required: true
    },
    dateUpdate : Date,
    active      : Boolean
});

export interface Product extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idProveedor : mongoose.Schema.Types.ObjectId;
    name : String;
    ean: String;
    costBuy: Number;
    costSale: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Product>('Producto', schProduct);