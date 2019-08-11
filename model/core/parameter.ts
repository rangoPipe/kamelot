import mongoose from "mongoose";

const schParameter = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    key : {
        type : String,
        required : true,
        uppercase: true
    },
    value : {
        type : String,
        required : true,
        lowercase: true
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

export interface Parameter extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    key       : String;
    value     : String;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Parameter>('parametro', schParameter);