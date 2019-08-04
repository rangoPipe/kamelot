import * as mongoose from "mongoose";

export interface Book extends mongoose.Document {
    title: String;
    author: String;
    isbn: String;
}

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String
});

export default mongoose.model<Book>('Book', bookSchema);