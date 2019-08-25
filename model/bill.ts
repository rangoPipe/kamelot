import { Schema, model, Document } from "mongoose";
import { Client } from "./core/client";
import { Employee } from "./core/employee";
import { Sale } from "./sale";
import { Fidelity } from "./fidelity";
import { tableName } from "../backend/src/common/enum/tableName";

const schBill= new Schema ({
    _id: Schema.Types.ObjectId,
    client: {
        type:   Schema.Types.ObjectId,
        ref: tableName.CLIENT
    },
    empleoyee: {
        type:   Schema.Types.ObjectId,
        ref:    tableName.EMPLOYEE
    },
    sale: [{
        type:   Schema.Types.ObjectId,
        ref:    tableName.SALE
    }],
    fidelity: [{
        type:   Schema.Types.ObjectId,
        ref:    tableName.FIDELITY
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

export default model<Bill>(tableName.BILL, schBill);