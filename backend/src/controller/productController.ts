import { Request, Response } from "express";
import productModel, { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
const translation = require('../translation/es.json');

class ProductController {

    public index(req: Request, res: Response) {
        res.render('product/index');     
    }

    public product(req: Request, res: Response) {
        res.render('product/product');
    }

    public async saveProduct(req: Request, res:Response) {

        try {
            var response:AppResponse;
            const { nombre, ean, compra, venta} = req.body;
            const product:Product = new productModel({
                name : nombre,
                ean,
                costBuy : compra,
                costSale : venta,
                dateCreate : new Date()
            });
    
            await product.save((err, item) => {

                new BaseException(200, 'probando');
                if(err){
                    new BaseException(err.code, err.errmsg);
                    response = new AppResponse(false, err.errmsg);
                }
                else
                    response = new AppResponse(true, translation.common.save);

                res.json(response);
            });
        } catch (error) {
            res.json( new AppResponse(false, error));
        }
    }
}

export const productController = new ProductController();