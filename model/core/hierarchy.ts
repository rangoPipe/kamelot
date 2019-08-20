import mongoose from "mongoose";

const schHierarchy = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
        uppercase: true
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

export interface Hierarchy extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name     : String;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Hierarchy>('jerarquia', schHierarchy);