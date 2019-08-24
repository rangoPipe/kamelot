import mongoose from "mongoose";

const schPoint = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    key: {
        type: Number,
        required: true
    },
    value : {
        type : Number,
        required: true
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

export interface Point extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    key:  Number;
    value:  Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Point>('punto', schPoint);