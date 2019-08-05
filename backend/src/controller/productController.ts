import { Request, Response } from "express";
import productModel, { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { DocumentQuery } from "mongoose";
const translation = require('../translation/es.json');

class ProductController {

    constructor() {

    }

    public allProducts(req: Request, res: Response) {
        try {
            
        } catch (error) {
            
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

            let result = await productModel.findById(id);
            let response:AppResponse = (!result) ? await productController.saveProduct(product) : await productController.updateProduct(product);           

            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    private async saveProduct(product:Product):Promise<AppResponse> {
        try {
            const res = await product.save();
            return new AppResponse(true, translation.common.save, res );
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateProduct(product:Product): Promise<AppResponse> {
        try {
            product.dateUpdate = new Date();
            const res = productModel.findByIdAndUpdate(product.id, product);
            return new AppResponse(true, translation.common.save, res );
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, 'Error interno');
        }
    }
}

export const productController = new ProductController();