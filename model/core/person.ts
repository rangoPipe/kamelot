import mongoose from "mongoose";
import { typeDocument } from "../../backend/src/common/enum/typeDocument";

const schPerson = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    typeDocument : {
        type: String,
        required: true
    },
    number_document : {
        type : String,
        required : true,
        lowercase: true
    },
    first_name : {
        type : String,
        required : true,
        uppercase: true
    },
    second_name : {
        type : String,
        uppercase: true
    },
    first_lastname : {
        type : String,
        required : true,
        uppercase: true
    },
    second_lastname : {
        type : String,
        uppercase: true
    },
    telephone : {
        type : String,
        lowercase: true
    },
    email : {
        type : String,
        required : true,
        lowercase: true
    },
    birthdate : {
        type : Date,
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

export interface Person extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    typeDocument    : typeDocument;
    number_document : String;
    first_name      : String;
    second_name     : String;
    first_lastname  : String;
    second_lastname : String;
    telephone       : String;
    email           : String;
    birthdate       : Date;
    dateCreate      : Date;
    dateUpdate      : Date;
    active          : Boolean;
}

export default mongoose.model<Person>('persona', schPerson);