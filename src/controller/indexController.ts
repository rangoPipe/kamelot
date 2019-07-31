import { Request, Response } from "express";

class IndexController {

    public index(req:Request, res:Response){ 
        res.render('index.hbs', {
            title: 'Renderizando'
        })
    }
}


export const indexController = new IndexController();;