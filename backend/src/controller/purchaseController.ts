import { Request, Response } from "express";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import purchaseModel, { Purchase } from "../model/purchase";
import { purchaseLogic } from "../logic/purchaseLogic";

class PurchaseController {

    public async allPurchases(req: Request, res: Response) {
        try {
            const result = await purchaseLogic.getAllPurchases();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
    }

    public async allProductsActive(req: Request, res: Response) {
        try {
            const result:Purchase[] = await purchaseLogic.getAllPurchases();
            let response = result.filter( x => x.active);
            res.send(response);

        } catch (error) {
            res.send(error)
        }    
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Purchase = purchaseController.createModel(req);
            let response = await purchaseLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = purchaseController.createModel(req);
            const result = await purchaseLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = purchaseController.createModel(req);
            const result = await purchaseLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Purchase {
        const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
        const model:Purchase = new purchaseModel({
            _id : params.id,
            ...params,
            dateCreate : new Date()
        });
        return model;
    }
}

export const purchaseController = new PurchaseController();