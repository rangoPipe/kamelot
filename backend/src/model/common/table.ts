import { Schema, model, Document } from "mongoose";
import { collectioneName } from "../../lib/enum/collectionName";

const schTable = new Schema ({
    _id: Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    capacity: {
        type: Number,
        default: 1
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

export interface Table extends Document {
    _id: Schema.Types.ObjectId;
    name       : String;
    capacity   : Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Table>(collectioneName.TABLE, schTable);