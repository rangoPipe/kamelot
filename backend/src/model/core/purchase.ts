import { Request } from "express";
import { Schema, Document, model, Types } from "mongoose";
import { IProduct } from "../common/product";
import { collectioneName } from "../../lib/enum/collectionName";

const schPurchase = new Schema ({
    product : {
        type:   Schema.Types.ObjectId,
        ref:    collectioneName.PRODUCT
    },
    costBuy: Number,
    costSale: Number,
    quantity: Number,
    dateCreate : Date,
    dateUpdate : Date,
    active     : {
        type : Boolean,
        default : true
    }
});

schPurchase.pre('updateOne', function() {
    this.set({ dateUpdate: new Date() });
});

schPurchase.pre('save', function() {
    this.set({ dateCreate: new Date() });
});

export interface IPurchase extends Document {
    _id: Schema.Types.ObjectId;
    product : IProduct;
    costBuy: Number;
    costSale: Number;
    quantity: Number;
    dateCreate? : Date;
    dateUpdate? : Date;
    active     : Boolean;
}

export const createModel = (req: Request): IPurchase => {
    const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
    const model:IPurchase = new PurchaseModel({
        _id : (!params.id) ? new Types.ObjectId() : params.id,
        ...params
    });
    return model;
}

const PurchaseModel = model<IPurchase>(collectioneName.PURCHASE, schPurchase);
export default PurchaseModel;