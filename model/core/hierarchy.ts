import { Schema, Document, model } from "mongoose";
import { Employee } from "./employee";
import { collectioneName } from "../../backend/src/common/enum/collectionName";

const schHierarchy = new Schema ({
    _id: Schema.Types.ObjectId,
    empleoyee: [{
        type: Schema.Types.ObjectId,
        ref: collectioneName.EMPLOYEE
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

export default model<Hierarchy>(collectioneName.HIERARCHY, schHierarchy);