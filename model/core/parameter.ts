import { Schema, Document, model } from "mongoose";
import { tableName } from "../../backend/src/common/enum/tableName";

const schParameter = new Schema ({
    _id: Schema.Types.ObjectId,
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

export interface Parameter extends Document {
    _id: Schema.Types.ObjectId;
    key       : String;
    value     : String;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Parameter>(tableName.PARAMETER, schParameter);