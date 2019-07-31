import { Request, Response } from "express";

class BooksController {

    constructor() {
        
    }

    index( req:Request, res:Response ):void {
        res.render('books/index', {
            title : 'books'
        });
    }

    addBook( req:Request, res:Response ):void {
        res.render('books/add', {
            title : 'books'
        });
    }

    saveBook( req:Request, res:Response ):void {
        console.log(req.body);
        res.send('received');
    }
}

export const booksController = new BooksController()