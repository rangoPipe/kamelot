import { Request, Response } from "express";
import productModel, { Product } from "../../model/core/product";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { productLogic } from "../../logic/core/productLogic";

class ProductController {

    public async allProducts(req: Request, res: Response) {
        try {
            const result = await productLogic.getAllProducts();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Product = productController.createModel(req);
            let response = await productLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try { 
            const model = productController.createModel(req);
            const result = await productLogic.getOne(model);            
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = productController.createModel(req.body);
            const result = await productLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Product {
        const { id, nombre, ean, idProveedor, idType } = (Object.keys(req.body).length > 0) ? req.body : req.params;

        const product:Product = new productModel({
            _id : id,
            name : nombre,
            provider : idProveedor,
            TypeMaterial : idType,
            ean,
            dateCreate : new Date()
        });
        return product;
    }
}

export const productController = new ProductController();