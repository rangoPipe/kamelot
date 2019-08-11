import mongoose from "mongoose";

const schProduct = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
    idProvider : mongoose.Schema.Types.ObjectId,
    TypeMaterial : Number,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    costBuy: Number,
    costSale: Number,
    quantity: Number,
    dateCreate : {
        type : Date,
        required: true
    },
    dateUpdate : Date,
    active     : {
        type : Boolean,
        default : true
    }
});

export interface Product extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idProvider : mongoose.Schema.Types.ObjectId;
    TypeMaterial : TypeMaterial;
    name : String;
    ean: String;
    costBuy: Number;
    costSale: Number;
    quantity: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Product>('Producto', schProduct);