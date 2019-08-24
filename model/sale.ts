import mongoose from "mongoose";

const schSale = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
    idProduct : mongoose.Schema.Types.ObjectId,
    idBill : mongoose.Schema.Types.ObjectId,
    quantity: Number,
    discount: Number,
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

export interface Sale extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    idBill : mongoose.Schema.Types.ObjectId;
    idProduct : mongoose.Schema.Types.ObjectId;
    total: Number;
    discount: Number;
    quantity: Number;
    dateCreate : Date;
    dateUpdate : Date;
    active     : Boolean;
}

export default mongoose.model<Sale>('venta', schSale);