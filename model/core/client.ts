import  { Schema, Document, model } from "mongoose";
import { Person, modelName as personName} from "./person";

const schClient = new Schema ({
    _id: Schema.Types.ObjectId,
    person: {
        type: Schema.Types.ObjectId,
        ref: personName
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

export const modelName = 'cliente';
export default model<Client>(modelName, schClient);