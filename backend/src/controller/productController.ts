import { Request, Response } from "express";
import productModel, { Product } from "../../../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { DocumentQuery } from "mongoose";
import { productLogic } from "../logic/productLogic";
import { create } from "domain";
const translation = require('../translation/es.json');

class ProductController {

    public async allProducts(req: Request, res: Response) {
        try {
            const result = await productLogic.getAllProducts();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {

            const product:Product = this.createModel(req);
            let response = await productLogic.save(product);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await productLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await productLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Product {
        const { id, nombre, ean, compra, venta } = req.body;

        const product:Product = new productModel({
            name : nombre,
            ean,
            costBuy : compra,
            costSale : venta,
            dateCreate : new Date()
        });
        return product;
    }
}

export const productController = new ProductController();