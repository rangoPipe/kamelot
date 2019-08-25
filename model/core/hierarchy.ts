import { Schema, Document, model } from "mongoose";
import { Employee } from "./employee";
import { tableName } from "../../backend/src/common/enum/tableName";

const schHierarchy = new Schema ({
    _id: Schema.Types.ObjectId,
    empleoyee: [{
        type: Schema.Types.ObjectId,
        ref: tableName.EMPLOYEE
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

export default model<Hierarchy>(tableName.HIERARCHY, schHierarchy);