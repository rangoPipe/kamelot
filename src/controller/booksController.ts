import { Request, Response } from "express";
import bookModel, { Book } from "../model/book";

class BooksController {

    constructor() {
        
    }

    public async index( req:Request, res:Response ): Promise<void> {
        const books:Book[] = await bookModel.find();
        res.render('books/index', {
            title : 'books',
            books
        });
    }

    public addBook( req:Request, res:Response ):void {
        res.render('books/add', {
            title : 'books'
        });
    }

    public async saveBook( req:Request, res:Response ) {

        const { title, author, isbn} = req.body;
        const book:Book = new bookModel({
            title,
            author,
            isbn 
        });

        await book.save();
        res.redirect('/books');
    }
}

export const booksController = new BooksController()