import { Request, Response } from "express";
import productModel, { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { DocumentQuery } from "mongoose";
import { productLogic } from "../logic/productLogic";
const translation = require('../translation/es.json');

class ProductController {

    constructor() {

    }

    public async allProducts(req: Request, res: Response) {
        try {
            const result = await productLogic.getAllProducts();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public product(req: Request, res: Response) {
        res.render('product/product');
    }

    public async save(req: Request, res:Response):Promise<void> {

        try {

            const { id, nombre, ean, compra, venta } = req.body;

            const product:Product = new productModel({
                name : nombre,
                ean,
                costBuy : compra,
                costSale : venta,
                dateCreate : new Date()
            });

            let response = await productLogic.save(product);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }
}

export const productController = new ProductController();