import { Request, Response } from "express";
import Model, { IProduct, createModel } from "../../model/common/product";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import { mainController } from "../mainController";

class ProductController {

    public async allProductsActive(req: Request, res: Response) {
        try {
            const result:IProduct[] = await mainController.getAllActive(Model);
            let response = result.filter( x => x.active);
            res.send(response);

        } catch (error) {
            res.send(error)
        }    
    }

    public async getOne(req: Request, res: Response) {
        try { 
            const result:IProduct | null = await mainController.getOne(Model, req.params.id);            
            res.json(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const entity:IProduct = createModel(req);            
            let result = await mainController.save(Model, entity);            
            res.json(new AppResponse(true, result));
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }    

    public async disable(req: Request, res: Response) {
        try {
            const entity = createModel(req);
            const result = await mainController.disable(Model, entity);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }
}

export const productController = new ProductController();