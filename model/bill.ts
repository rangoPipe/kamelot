import { Schema, model, Document } from "mongoose";
import { Client, modelName as clientName } from "./core/client";
import { Employee, modelName as empleoyeeName } from "./core/employee";
import { Sale, modelName as saleName } from "./sale";
import { Fidelity, modelName as fidelityName } from "./fidelity";

const schBill= new Schema ({
    _id: Schema.Types.ObjectId,
    client: {
        type:   Schema.Types.ObjectId,
        ref: clientName
    },
    empleoyee: {
        type:   Schema.Types.ObjectId,
        ref:    empleoyeeName
    },
    sale: [{
        type:   Schema.Types.ObjectId,
        ref:    saleName
    }],
    fidelity: [{
        type:   Schema.Types.ObjectId,
        ref:    fidelityName
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

export const modelName = 'factura';
export default model<Bill>(modelName, schBill);