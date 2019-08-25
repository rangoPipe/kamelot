import { Schema, model, Document } from "mongoose";
import { typeDocument } from "../../backend/src/common/enum/typeDocument";
import { Client, modelName as clientName } from "./client";
import { Employee, modelName as empleoyeeName } from "./employee";

const schPerson = new Schema ({
    _id: Schema.Types.ObjectId,
    empleoyee: {
        type: Schema.Types.ObjectId,
        ref: empleoyeeName
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: clientName
    },
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

export interface Person extends Document {
    _id: Schema.Types.ObjectId;
    client?:          Client;
    empleoyee?:       Employee;
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

export const modelName = 'persona';
export default model<Person>(modelName, schPerson);