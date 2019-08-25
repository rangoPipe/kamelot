import { Schema, model, Document } from "mongoose";
import { Workshift, modelName as workshiftName } from "../workshift";
import { Person, modelName as personName } from "./person";
import { Hierarchy, modelName as hierarchyName } from "./hierarchy";

const schEmployee = new Schema ({
    _id: Schema.Types.ObjectId,
    person: {
        type: Schema.Types.ObjectId,
        ref: personName
    },
    hierarchy: {
        tyoe: Schema.Types.ObjectId,
        ref: hierarchyName
    },
    workshift: {
        type: Schema.Types.ObjectId,
        ref: workshiftName
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

export const modelName = 'empleado';
export default model<Employee>(modelName, schEmployee);