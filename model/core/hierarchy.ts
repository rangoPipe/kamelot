import { Schema, Document, model } from "mongoose";
import { Employee, modelName as empleoyeeName } from "./employee";

const schHierarchy = new Schema ({
    _id: Schema.Types.ObjectId,
    empleoyee: [{
        type: Schema.Types.ObjectId,
        ref: empleoyeeName
    }],
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

export interface Hierarchy extends Document {
    _id: Schema.Types.ObjectId;
    empleoyee? : Employee[];
    name       : String;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export const modelName = 'jerarquia';
export default model<Hierarchy>(modelName, schHierarchy);