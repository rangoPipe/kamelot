import { Schema, model, Document } from "mongoose";
import { typeDay } from "../../common/enum/typeDay";
import { Workshift } from "../workshift";
import { collectioneName } from "../../common/enum/collectionName";

const schSchedule = new Schema ({
    _id: Schema.Types.ObjectId,
    workshift: {
        type: Schema.Types.ObjectId,
        ref: collectioneName.WORKSHIFT
    },
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    dateBegin : {
        type : Date,
        required : true
    },
    dateEnd : {
        type : Date,
        required : true
    },
    days : {
        type : Array,
        required : true,
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

export interface Schedule extends Document {
    _id: Schema.Types.ObjectId;
    workshift? : Workshift[];
    name       : String;
    dateBegin  : Date;
    dateEnd    : Date;
    days       : [typeDay];
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Schedule>(tableName.SCHEDULE, schSchedule);