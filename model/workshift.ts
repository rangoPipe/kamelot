import { Schema, Document, model } from "mongoose";
import { Schedule } from "./core/schedule";
import { Employee } from "./core/employee";
import { tableName } from "../backend/src/common/enum/tableName";

const schWorkshift = new Schema ({
    _id: Schema.Types.ObjectId,
    empleoyee: [{
        type : Schema.Types.DocumentArray,
        ref  : tableName.EMPLOYEE
    }],
    schedule: {
        type: Schema.Types.ObjectId,
        ref : tableName.SCHEDULE
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

export interface Workshift extends Document {
    _id: Schema.Types.ObjectId;
    empleoyee  : Employee[];
    schedule   : Schedule;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Workshift>(tableName.WORKSHIFT, schWorkshift);