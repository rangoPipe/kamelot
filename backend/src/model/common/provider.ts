import { Request } from "express";
import { Document, model, Schema, Types } from "mongoose";
import { IProduct } from './product';
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
    dateCreate : Date,
    dateUpdate : Date,
    active     : {
        type : Boolean,
        default : true
    }
});

schProvider.pre('updateOne', function() {
    this.set({ dateUpdate: new Date() });
});

schProvider.pre('save', function() {
    this.set({ dateCreate: new Date() });
});

export interface IProvider extends Document {
    _id: Schema.Types.ObjectId;
    product: IProduct[];
    name : String;
    dateContract:Date;
    dateCreate? : Date;
    dateUpdate? : Date;
    active     : Boolean;
}

export const createModel = (req: Request): IProvider => {
    const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
    const model:IProvider = new ProviderModel({
        _id : (!params.id) ? new Types.ObjectId() : params.id,
        ...params
    });
    return model;
}

const ProviderModel = model<IProvider>(collectioneName.PROVIDER, schProvider);
export default ProviderModel;