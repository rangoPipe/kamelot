import { Schema, Document, model } from "mongoose";
import { Fidelity } from "../fidelity";
import { collectioneName } from "../../backend/src/common/enum/collectionName";

const schPoint = new Schema ({
    _id: Schema.Types.ObjectId,
    fidelity: [{
        type: Schema.Types.ObjectId,
        ref: collectioneName.FIDELITY
    }],
    key: {
        type: Number,
        required: true
    },
    value : {
        type : Number,
        required: true
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

export interface Point extends Document {
    _id: Schema.Types.ObjectId;
    fidelity?: Fidelity[],
    key:  Number;
    value:  Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Point>(collectioneName.POINT, schPoint);