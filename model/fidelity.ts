import { Schema, Document, model } from "mongoose";
import { Client, modelName as clientName } from "./core/client";
import { Point, modelName as pointName } from "./core/point";
import { Bill, modelName as billName } from "./bill";

const schFidelity = new Schema ({
    id: Schema.Types.ObjectId,
    client: [{
        type: Schema.Types.ObjectId,
        ref: clientName
    }],
    bill: [{
        type: Schema.Types.ObjectId,
        ref: billName
    }],
    point: [{ 
        type: Schema.Types.ObjectId,
        ref: pointName
    }],
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

export interface Fidelity extends Document {
    _id: Schema.Types.ObjectId;
    bill   : Bill;
    client : Client[];
    point : Point[];
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export const modelName = 'fidelidad';
export default model<Fidelity>(modelName, schFidelity);