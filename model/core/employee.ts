import mongoose from "mongoose";

const schEmployee = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    idPerson: mongoose.Schema.Types.ObjectId,
    idHierarchy: mongoose.Schema.Types.ObjectId,
    salary : {
        type : Number,
        required : true
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

export interface Employee extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idHierarchy:  mongoose.Schema.Types.ObjectId;
    salary     : Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Employee>('empleado', schEmployee);