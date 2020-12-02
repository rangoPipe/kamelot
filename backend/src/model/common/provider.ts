import { Request } from "express";
import { Document, model, Schema, Types } from "mongoose";
import { Product } from './product';
import { collectioneName } from "../../lib/enum/collectionName";

const schProvider = new Schema ({
    product : [{ type: Schema.Types.ObjectId, 
        ref: collectioneName.PRODUCT
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
    product: Product[];
    name : String;
    dateContract:Date;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export const createModel = (req: Request): Provider => {
    const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
    const model:Provider = new ProviderModel({
        _id : (!params.id) ? new Types.ObjectId() : params.id,
        ...params,
        dateCreate : new Date()
    });
    return model;
}

const ProviderModel = model<Provider>(collectioneName.PROVIDER, schProvider);
export default ProviderModel;