import  { Schema, Document, model } from "mongoose";
import { Person } from "./person";
import { tableName } from "../../backend/src/common/enum/tableName";

const schClient = new Schema ({
    _id: Schema.Types.ObjectId,
    person: {
        type: Schema.Types.ObjectId,
        ref: tableName.PERSON
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

export interface Client extends Document {
    _id: Schema.Types.ObjectId;
    person: Person;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Client>(tableName.CLIENT, schClient);