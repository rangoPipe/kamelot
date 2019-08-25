import { Document, model, Schema } from "mongoose";
import { Provider } from "./provider";
import { Purchase } from "../purchase";
import { Sale } from "../sale";
import { tableName } from "../../backend/src/common/enum/tableName";

const schProduct = new Schema ({
    _id: Schema.Types.ObjectId,
    provider : {
        type: Schema.Types.ObjectId,
        ref: tableName.PROVIDER
    },
    purcharse: [{
        type: Schema.Types.ObjectId,
        ref: tableName.PURCHASE
    }],
    sale: [{
        type: Schema.Types.ObjectId,
        ref: tableName.SALE
    }],
    TypeMaterial : Number,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
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

export interface Product extends Document {
    _id: Schema.Types.ObjectId;
    provider : Provider;
    purchase?: Purchase[];
    sale?:     Sale[];
    TypeMaterial : Number ;
    name : String;
    ean: String;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Product>(tableName.PRODUCT, schProduct);