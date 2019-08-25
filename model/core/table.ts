import { Schema, model, Document } from "mongoose";

const schTable = new Schema ({
    _id: Schema.Types.ObjectId,
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

export interface Table extends Document {
    _id: Schema.Types.ObjectId;
    name       : String;
    capacity   : Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Table>('mesa', schTable);