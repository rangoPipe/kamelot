import { Document, model, Schema } from "mongoose";
import { nameModel as namePrvovicer, Provider } from "./provider";
import { Purchase, modelName as purchaseName } from "../purchase";
import { Sale, modelName as saleName } from "../sale";

const schProduct = new Schema ({
    _id: Schema.Types.ObjectId,
    provider : {
        type: Schema.Types.ObjectId,
        ref: namePrvovicer
    },
    purcharse: [{
        type: Schema.Types.ObjectId,
        ref: purchaseName
    }],
    sale: [{
        type: Schema.Types.ObjectId,
        ref: saleName
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
export const nameModel = 'producto';
export default model<Product>(nameModel, schProduct);