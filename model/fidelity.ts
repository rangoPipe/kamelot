import mongoose from "mongoose";

const schFidelity = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
    idClient: mongoose.Schema.Types.ObjectId,
    idSale: mongoose.Schema.Types.ObjectId,
    idPoint: mongoose.Schema.Types.ObjectId,
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

export interface Fidelity extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idClient : mongoose.Schema.Types.ObjectId;
    idSale : mongoose.Schema.Types.ObjectId;
    idPoint : mongoose.Schema.Types.ObjectId;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Fidelity>('Fidelidad', schFidelity);