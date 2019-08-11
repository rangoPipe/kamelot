import mongoose from "mongoose";

const schPurchase = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
    idProduct : mongoose.Schema.Types.ObjectId,
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

export interface Purchase extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idProduct : mongoose.Schema.Types.ObjectId;
    costBuy: Number;
    costSale: Number;
    quantity: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Buy>('Compra', schPurchase);