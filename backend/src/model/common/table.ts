import { Request } from "express";
import { Schema, model, Document, Types } from "mongoose";
import { collectioneName } from "../../lib/enum/collectionName";

const schTable = new Schema ({
    _id: Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    capacity: {
        type: Number,
        default: 1
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

schTable.pre('updateOne', function() {
    this.set({ dateUpdate: new Date() });
});

schTable.pre('save', function() {
    this.set({ dateCreate: new Date() });
});

export interface ITable extends Document {
    _id: Schema.Types.ObjectId;
    name       : String;
    capacity   : Number;
    dateCreate? : Date;
    dateUpdate? : Date;
    active     : Boolean;
}

export const createModel = (req: Request): ITable => {
    const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
    const model:ITable = new TableModel({
        _id : (!params._id) ? new Types.ObjectId() : params._id,
        ...params
    });
    return model;
}

const TableModel = model<ITable>(collectioneName.TABLE, schTable);
export default TableModel