import mongoose from "mongoose";

const schWorkshift = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    idEmpleoyee: mongoose.Schema.Types.ObjectId,
    idSchedule: mongoose.Schema.Types.ObjectId,
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

export interface Workshift extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idEmpleoyee: mongoose.Schema.Types.ObjectId;
    idSchedule : mongoose.Schema.Types.ObjectId;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Workshift>('turno', schWorkshift);