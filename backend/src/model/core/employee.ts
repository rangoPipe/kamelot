import { Schema, model, Document } from "mongoose";
import { Workshift} from "../workshift";
import { Person } from "./person";
import { Hierarchy } from "./hierarchy";
import { collectioneName } from  "../../common/enum/collectionName";

const schEmployee = new Schema ({
    person: {
        type: Schema.Types.ObjectId,
        ref: collectioneName.PERSON
    },
    hierarchy: {
        type: Schema.Types.ObjectId,
        ref: collectioneName.HIERARCHY
    },
    workshift: {
        type: Schema.Types.ObjectId,
        ref: collectioneName.EMPLOYEE
    },
    salary : {
        type : Number,
        required : true
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

export interface Employee extends Document {
    _id: Schema.Types.ObjectId;
    workshift? : Workshift 
    person     : Person;
    hierarchy  : Hierarchy;
    salary     : Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Employee>(collectioneName.EMPLOYEE, schEmployee);