import mongoose from "mongoose";

const schClient = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    idPerson: mongoose.Schema.Types.ObjectId,
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

export interface Client extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idPerson:  mongoose.Schema.Types.ObjectId;
    idHierarchy:  mongoose.Schema.Types.ObjectId;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Client>('cliente', schClient);