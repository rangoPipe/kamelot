import { Schema, Document, model } from "mongoose";
import { Client } from "./core/client";
import { Point  } from "./core/point";
import { Bill  } from "./bill";
import { tableName } from "../backend/src/common/enum/tableName";

const schFidelity = new Schema ({
    id: Schema.Types.ObjectId,
    client: [{
        type: Schema.Types.ObjectId,
        ref: tableName.CLIENT
    }],
    bill: [{
        type: Schema.Types.ObjectId,
        ref: tableName.BILL
    }],
    point: [{ 
        type: Schema.Types.ObjectId,
        ref: tableName.POINT
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

export default model<Fidelity>(tableName.FIDELITY, schFidelity);