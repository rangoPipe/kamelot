import { Request, Response } from "express";
import productModel, { Product } from "../model/product";

class ProductController {

    public index(req: Request, res: Response) {
        res.render('product/index');
        
    }

    public product(req: Request, res: Response) {
        res.render('product/product');
    }

    public async saveProduct(req: Request, res:Response) {

        try {
            const { nombre, ean, compra, venta} = req.body;
            const product:Product = new productModel({
                name : nombre,
                ean,
                costBuy : compra,
                costSale : venta,
                dateCreate : new Date()
            });
    
            const response = await product.save((err, item) => {
                if(err)
                    console.log(123);
                else
                    console.log(item);
                res.json({
                    message:'tlasldas'
                });
            });
        } catch (error) {
            res.json()
        }
       

    }
}

export const productController = new ProductController();