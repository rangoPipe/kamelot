import mongoose from "mongoose";

const schTable = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    capacity: Number,
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

export interface Table extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name       : String;
    capacity   : Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Table>('mesa', schTable);