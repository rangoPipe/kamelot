import { Schema, model, Document } from "mongoose";
import { Client } from "../common/client";
import { Employee } from "../common/employee";
import { Sale } from "./sale";
import { Fidelity } from "./fidelity";
import { collectioneName } from "../../lib/enum/collectionName";

const schBill= new Schema ({
    _id: Schema.Types.ObjectId,
    client: {
        type:   Schema.Types.ObjectId,
        ref: collectioneName.CLIENT
    },
    empleoyee: {
        type:   Schema.Types.ObjectId,
        ref:    collectioneName.EMPLOYEE
    },
    sale: [{
        type:   Schema.Types.ObjectId,
        ref:    collectioneName.SALE
    }],
    fidelity: [{
        type:   Schema.Types.ObjectId,
        ref:    collectioneName.FIDELITY
    }],
    numberBill : {
        type: String,
        required : true
    },
    state: Number,
    total: Number,
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

export interface Bill extends Document {
    _id: Schema.Types.ObjectId;
    client:  Client;
    empleoyee:  Employee;
    fidelity?: Fidelity;
    numberBill:  String;
    sale?:  Sale;
    state:  Number;
    total:  Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default model<Bill>(collectioneName.BILL, schBill);