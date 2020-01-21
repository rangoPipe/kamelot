import { Document, model, Schema } from "mongoose";
import { Provider } from "./provider";
import { Purchase } from "../purchase";
import { Sale } from "../sale";
import { collectioneName } from "../../backend/src/common/enum/collectionName";

const schProduct = new Schema ({
    provider : {
        type: Schema.Types.ObjectId,
        ref: collectioneName.PROVIDER
    },
    purchase: [{
        type: Schema.Types.ObjectId,
        ref: collectioneName.PURCHASE
    }],
    sale: [{
        type: Schema.Types.ObjectId,
        ref: collectioneName.SALE
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
    purchase: Purchase[];
    sale?:     Sale[];
    TypeMaterial : Number ;
    name : String;
    ean: String;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Product>(collectioneName.PRODUCT, schProduct);