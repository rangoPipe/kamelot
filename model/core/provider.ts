import mongoose from "mongoose";

const schProvider = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
        uppercase: true
    },
    dateContract: Date,
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

export interface Provider extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name : String;
    dateContract:Date;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Provider>('Proveedor', schProvider);