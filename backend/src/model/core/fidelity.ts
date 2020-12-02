import { Schema, Document, model } from "mongoose";
import { Client } from "../common/client";
import { Point  } from "../common/point";
import { Bill  } from "./bill";
import { collectioneName } from "../../lib/enum/collectionName";

const schFidelity = new Schema ({
    id: Schema.Types.ObjectId,
    client: [{
        type: Schema.Types.ObjectId,
        ref: collectioneName.CLIENT
    }],
    bill: [{
        type: Schema.Types.ObjectId,
        ref: collectioneName.BILL
    }],
    point: [{ 
        type: Schema.Types.ObjectId,
        ref: collectioneName.POINT
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

export default model<Fidelity>(collectioneName.FIDELITY, schFidelity);