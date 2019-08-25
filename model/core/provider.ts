import { Schema, Document, model } from "mongoose";
import { Product } from './product';
import { tableName } from "../../backend/src/common/enum/tableName";

const schProvider = new Schema ({
    _id: Schema.Types.ObjectId,
    product : [{ type: Schema.Types.ObjectId, 
        ref: tableName.PRODUCT
    }],
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    dateContract: Date,
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

export interface Provider extends Document {
    _id: Schema.Types.ObjectId;
    product?: Product[];
    name : String;
    dateContract:Date;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Provider>(tableName.PROVIDER, schProvider);