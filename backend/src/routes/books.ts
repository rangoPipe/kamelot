import { Router } from "express";
import { booksController } from "../controller/booksController";

const router:Router = Router();


router.get('/books', booksController.index);
router.get('/books/add', booksController.addBook);
router.post('/books/add', booksController.saveBook);

export default router;