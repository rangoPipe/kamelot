import mongoose from "mongoose";

const schBill= new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    idClient: mongoose.Schema.Types.ObjectId,
    idEmpleoyee: mongoose.Schema.Types.ObjectId,
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

export interface Bill extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idClient:  mongoose.Schema.Types.ObjectId;
    idEmpleoyee:  mongoose.Schema.Types.ObjectId;
    numberBill:  String;
    state:  Number;
    total:  Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Bill>('factura', schBill);