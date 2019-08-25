import { Schema, Document, model } from "mongoose";
import { Product, nameModel as productName } from "./core/product";
import { Bill, modelName as billName } from "./bill";

const schSale = new Schema ({
    id: Schema.Types.ObjectId,
    product : {
        type:   Schema.Types.ObjectId,
        ref: productName
    },
    bill : {
        type:   Schema.Types.ObjectId,
        ref:    billName
    },
    quantity: Number,
    discount: Number,
    total: Number,
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

export interface Sale extends Document {
    _id: Schema.Types.ObjectId;
    bill : Bill;
    product : Product
    total: Number;
    discount: Number;
    quantity: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export const modelName = 'venda';
export default model<Sale>(modelName, schSale);