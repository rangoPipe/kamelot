import { Request } from "express";
import { Document, model, Schema, Types } from "mongoose";
import { IProvider } from "./provider";
import { collectioneName } from "../../lib/enum/collectionName";

const schProduct = new Schema ({
    provider : {
        type: Schema.Types.ObjectId,
        ref: collectioneName.PROVIDER
    },
    ean: String,
    purchase: Number,
    sale: {
        type: Number,
        required: true
    },
    typeMaterial : Number,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    dateCreate : Date,
    dateUpdate : Date,
    active     : {
        type : Boolean,
        default : true
    }
});

schProduct.pre('updateOne', function() {
    this.set({ dateUpdate: new Date() });
});

schProduct.pre('save', function() {
    this.set({ dateCreate: new Date() });
});

export interface IProduct extends Document {
    _id: Schema.Types.ObjectId;
    provider : IProvider;
    purchase: Number;
    sale?:     Number;
    typeMaterial : Number ;
    name : String;
    ean: String;
    dateCreate? : Date;
    dateUpdate? : Date;
    active     : Boolean;
}

export const createModel = (req: Request): IProduct => {
    const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
    const model:IProduct = new ProductModel({
        _id : (!params._id) ? new Types.ObjectId() : params._id,
        ...params
    });
    return model;
}

const ProductModel = model<IProduct>(collectioneName.PRODUCT, schProduct);
export default ProductModel;