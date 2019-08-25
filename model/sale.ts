import { Schema, Document, model } from "mongoose";
import { Product } from "./core/product";
import { Bill } from "./bill";
import { tableName } from "../backend/src/common/enum/tableName";

const schSale = new Schema ({
    id: Schema.Types.ObjectId,
    product : {
        type:   Schema.Types.ObjectId,
        ref: tableName.PRODUCT
    },
    bill : {
        type:   Schema.Types.ObjectId,
        ref:    tableName.BILL
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

export default model<Sale>(tableName.SALE, schSale);