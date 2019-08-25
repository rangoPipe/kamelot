import { Schema, Document, model } from "mongoose";
import { Product, nameModel as productName } from "./core/product";

const schPurchase = new Schema ({
    id: Schema.Types.ObjectId,
    product : [{
        type:   Schema.Types.ObjectId,
        ref:    productName
    }],
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

export interface Purchase extends Document {
    _id: Schema.Types.ObjectId;
    product : Product[];
    costBuy: Number;
    costSale: Number;
    quantity: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export const modelName = 'compra';
export default model<Purchase>(modelName, schPurchase);