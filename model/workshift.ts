import { Schema, Document, model } from "mongoose";
import { modelName as scheduleName, Schedule } from "./core/schedule";
import { modelName as empleoyeeName, Employee } from "./core/employee";

const schWorkshift = new Schema ({
    _id: Schema.Types.ObjectId,
    empleoyee: [{
        type : Schema.Types.DocumentArray,
        ref  : empleoyeeName
    }],
    schedule: {
        type: Schema.Types.ObjectId,
        ref : scheduleName
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
    Schedule   : Schedule;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export const modelName = 'turno';
export default model<Workshift>(modelName, schWorkshift);