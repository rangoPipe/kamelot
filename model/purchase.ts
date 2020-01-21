import { Schema, Document, model } from "mongoose";
import { Product } from "./core/product";
import { collectioneName } from "../backend/src/common/enum/collectionName";

const schPurchase = new Schema ({
    id: Schema.Types.ObjectId,
    product : {
        type:   Schema.Types.ObjectId,
        ref:    collectioneName.PRODUCT
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

export interface Purchase extends Document {
    _id: Schema.Types.ObjectId;
    product : Product;
    costBuy: Number;
    costSale: Number;
    quantity: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Purchase>(collectioneName.PURCHASE, schPurchase);