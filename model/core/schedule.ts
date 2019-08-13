import mongoose from "mongoose";
import { typeDay } from "../../backend/src/common/enum/typeDay";

const schSchedule = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
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

export interface Schedule extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name       : String;
    dateBegin  : Date;
    dateEnd    : Date;
    days       : [typeDay];
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Schedule>('jornada', schSchedule);